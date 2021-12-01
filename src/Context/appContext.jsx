import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
   isDarkMode: true,
};

const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const setDarkMode = () => {
      dispatch({ type: "SET_DARK_MODE", initialState });
   };
   return (
      <AppContext.Provider value={{ ...state, setDarkMode }}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
