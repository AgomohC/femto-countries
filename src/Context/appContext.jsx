import axios from "axios";
import React, { useContext, useReducer, useEffect, useCallback } from "react";
import reducer from "./reducer";
import {
   SET_LOADING,
   SET_DARK_MODE,
   SEARCH,
   STOP_LOADING,
   DISPLAY_ITEMS,
   SINGLE_COUNTRY,
   SELECT,
} from "./actions";

const AppContext = React.createContext();
const url = "https://restcountries.com/v2/";

const initialState = {
   countries: [],
   isDarkMode: true,
   searchValue: "",
   singleCountry: {},
   isLoading: false,
   selectValue: "",
};

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const setDarkMode = () => {
      dispatch({ type: SET_DARK_MODE });
   };
   const fetchData = async () => {
      dispatch({ type: SET_LOADING });
      try {
         const { data } = await axios.get(`${url}all`);
         const response = await data.map((datum) => {
            const {
               name,
               region,
               capital,
               population,
               flags: { svg },
               alpha3Code,
            } = datum;
            return {
               name,
               region,
               capital,
               population,
               svg,
               alpha3Code,
            };
         });
         dispatch({ type: STOP_LOADING });
         dispatch({ type: DISPLAY_ITEMS, payload: response });
      } catch (error) {
         dispatch({ type: STOP_LOADING });
         console.log(`error`);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);
   const setSearchValue = async (value) => {
      if (value.length < 1) {
         fetchData();
         return;
      }
      dispatch({ type: SET_LOADING });
      dispatch({ type: SEARCH, payload: value });
      try {
         const data = await fetch(`${url}/name/${value}`);
         const response = await data.json();
         const responseEdit = await response.map((datum) => {
            const {
               name,
               region,
               capital,
               population,
               flags: { png },
               alpha3Code,
            } = datum;
            return {
               name,
               region,
               capital,
               population,
               png,
               alpha3Code,
            };
         });

         dispatch({ type: STOP_LOADING });
         dispatch({ type: DISPLAY_ITEMS, payload: responseEdit });
      } catch (error) {
         dispatch({ type: STOP_LOADING });
         console.log("error");
      }
   };

   const setSelectValue = async (value) => {
      if (value === "All") {
         dispatch({ type: SELECT, payload: value });
         fetchData();
         return;
      }
      dispatch({ type: SET_LOADING });
      dispatch({ type: SELECT, payload: value });
      try {
         const data = await fetch(`${url}region/${value}`);
         const response = await data.json();
         const responseEdit = await await response.map((datum) => {
            const {
               name,
               region,
               capital,
               population,
               flags: { png },
               alpha3Code,
            } = datum;
            return {
               name,
               region,
               capital,
               population,
               png,
               alpha3Code,
            };
         });
         dispatch({ type: STOP_LOADING });
         dispatch({ type: DISPLAY_ITEMS, payload: responseEdit });
      } catch (error) {
         console.log(error);
      }
   };

   const getSingleCountry = useCallback(async (code) => {
      dispatch({ type: SET_LOADING });

      try {
         const data = await fetch(`${url}alpha/${code}`);
         const response = await data.json();
         const responseMap = {
            name: response.name,
            region: response.region,
            capital: response.capital,
            population: response.population,
            subregion: response.subregion,
            flags: response.flags.svg,
            topLevelDomain: response.topLevelDomain,
            languages: response.languages,
            nativeName: response.nativeName,
            currencies: response.currencies,
            borders: response.borders,
         };
         dispatch({
            type: SINGLE_COUNTRY,
            payload: responseMap,
         });
         dispatch({ type: STOP_LOADING });
      } catch {
         dispatch({ type: STOP_LOADING });
         console.log("error");
      }
   }, []);
   return (
      <AppContext.Provider
         value={{
            ...state,
            setDarkMode,
            setSearchValue,
            getSingleCountry,
            setSelectValue,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};
export default AppContext;

export { AppContext, AppProvider };
