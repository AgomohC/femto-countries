import React from "react";
import Header from "./Components/Header";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import Input from "./Components/Input";
import Countries from "./Components/Countries";
import CountryPage from "./Components/CountryPage";
import { Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(10),
   },
   container2: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
   },
   paper: {
      minHeight: "100vh",
      backgroundColor: theme.palette.primary.dark,
   },
}));
const Home = () => {
   const classes = useStyles();

   return (
      <>
         <Paper className={classes.paper}>
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
                  render={(props) => <CountryPage {...props} />}
               />
            </Grid>
         </Paper>
      </>
   );
};

export default Home;
