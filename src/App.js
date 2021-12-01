import React from "react";
import Header from "./Components/Header";
import { makeStyles, Grid } from "@material-ui/core";
import Input from "./Components/Input";

const useStyles = makeStyles((theme) => ({
   container: {
      marginTop: theme.spacing(10),
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
      </Grid>
   );
};

export default App;
