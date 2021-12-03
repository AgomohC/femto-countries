import React from "react";
import { makeStyles, Grid, Button } from "@material-ui/core";
import { useGlobalContext } from "../Context/appContext";

const useStyles = makeStyles((theme) => ({
   container: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
   },
   container2: {
      marginTop: theme.spacing(5),
   },
}));

const CountryPage = (props) => {
   const {
      match: {
         params: { name },
      },
   } = props;
   const { SingleCountry } = useGlobalContext();

   const classes = useStyles();
   return (
      <Grid container xs={10} className={classes.container}>
         <Grid xs={2} item>
            <Button variant="contained" color="default">
               Back to home
            </Button>
         </Grid>
         <Grid container item spacing={5} className={classes.container2}>
            <Grid item xs={12} sm={6}>
               image
            </Grid>
            <Grid item xs={12} sm={6}>
               props
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CountryPage;
