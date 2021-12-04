import React from "react";
import Header from "./Components/Header";
import { makeStyles, Grid } from "@material-ui/core";
import Input from "./Components/Input";
import Countries from "./Components/Countries";
import CountryPage from "./Components/CountryPage";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(10),
   },
   container2: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
   },
}));

const App = () => {
   const classes = useStyles();
   return (
      <Router history={history}>
         <Switch>
            <Grid container>
               <Header />
               <Route exact path="/">
                  <Grid container className={classes.container} item>
                     <Input />
                  </Grid>
                  <Grid container className={classes.container2} item xs={10}>
                     <Countries />
                  </Grid>
               </Route>
               <Route
                  exact
                  path="/alpha/:code"
                  render={(props) => (
                     <CountryPage className={classes.container} {...props} />
                  )}
               />
            </Grid>
         </Switch>
      </Router>
   );
};

export default App;
