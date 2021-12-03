import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();
const url = "https://restcountries.com/v2/";

const initialState = {
   countries: [],
   isDarkMode: true,
   searchValue: "",
   singleCountry: [],
   isLoading: false,
};

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const setDarkMode = () => {
      dispatch({ type: "SET_DARK_MODE", initialState });
   };
   const setSearchValue = (event) => {
      dispatch({ type: "SEARCH", payload: event.target.value, initialState });
   };
   const fetchData = async () => {
      dispatch({ type: "SET_LOADING", initialState });
      try {
         const { data } = await axios.get(`${url}all`);

         const response = await data.map((datum) => {
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
         dispatch({ type: "STOP_LOADING" });
         dispatch({ type: "DISPLAY_ITEMS", payload: response });
      } catch (error) {
         dispatch({ type: "STOP_LOADING" });
         console.log(`error`);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);
   const getSingleCountry = async (code) => {
      try {
         const { data } = await axios.get(`${url}alpha?codes=${code}`);

         const response = await data.map((datum) => {
            const {
               name,
               region,
               capital,
               population,
               subregion,
               flags: { png },
               topLevelDomain,
               languages,
               nativeName,
               currencies,
            } = datum;
            return {
               name,
               region,
               capital,
               population,
               subregion,
               png,
               topLevelDomain,
               languages,
               nativeName,
               currencies,
            };
         });
         dispatch({ type: "SINGLE_COUNTRY", payload: response, initialState });
      } catch {
         console.log("error");
      }
   };
   return (
      <AppContext.Provider
         value={{ ...state, setDarkMode, setSearchValue, getSingleCountry }}
      >
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
