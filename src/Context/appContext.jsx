import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
   isDarkMode: true,
   searchValue: "",
};

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const setDarkMode = () => {
      dispatch({ type: "SET_DARK_MODE", initialState });
   };
   const setSearchValue = (event) => {
      dispatch({ type: "SEARCH", payload: event.target.value, initialState });
   };
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
