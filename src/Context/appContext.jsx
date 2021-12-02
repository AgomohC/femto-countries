import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
   countries: [],
   isDarkMode: true,
   searchValue: "",
   singleCountry: {},
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
      try {
         const { data } = await axios.get(`https://restcountries.com/v2/all`);

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

         dispatch({ type: "DISPLAY_ITEMS", payload: response });
      } catch (error) {
         console.log(`error`);
      }
   };
   useEffect(() => {
      fetchData();
   }, []);

   return (
      <AppContext.Provider value={{ ...state, setDarkMode, setSearchValue }}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
