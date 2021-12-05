import React from "react";

import { Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useGlobalContext } from "./Context/appContext";
import Home from "./Home";

const App = () => {
   const { isDarkMode } = useGlobalContext();

   const theme = createTheme({
      typography: {
         fontFamily: [
            "Nunito Sans",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
         ].join(","),
      },
      palette: {
         type: isDarkMode ? "dark" : "light",
         primary: {
            main: isDarkMode ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
            dark: isDarkMode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
         },
         text: {
            primary: isDarkMode ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
         },
      },
   });

   return (
      <ThemeProvider theme={theme}>
         <Switch>
            <Home />
         </Switch>
      </ThemeProvider>
   );
};

export default App;
