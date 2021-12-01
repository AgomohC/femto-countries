import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./Context/appContext";
import { ThemeProvider, theme } from "./theme";

ReactDOM.render(
   <React.StrictMode>
      <AppProvider>
         <ThemeProvider theme={theme}>
            <App />
         </ThemeProvider>
      </AppProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
