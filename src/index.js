import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./Context/appContext";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
   <React.StrictMode>
      <AppProvider>
         <Router history={history}>
            <App />
         </Router>
      </AppProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
