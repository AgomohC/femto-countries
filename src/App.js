import React from "react";
import Header from "./Components/Header";
import { makeStyles, Grid } from "@material-ui/core";
import Input from "./Components/Input";
import Countries from "./Components/Countries";
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
      <Grid container>
         <Header />
         <Grid container className={classes.container} item>
            <Input />
         </Grid>
         <Grid container className={classes.container2} item xs={10}>
            <Countries />
         </Grid>
      </Grid>
   );
};

export default App;
