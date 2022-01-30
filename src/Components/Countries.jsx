import React from "react";
import SingleCountry from "./SingleCountry";
import { Grid, CircularProgress, makeStyles } from "@material-ui/core";
import { useGlobalContext } from "../Context/appContext";

const useStyles = makeStyles((theme) => ({
   loading: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      display: "flex",
      justifyContent: "center",
   },
   progress: {
      marginLeft: "auto",
      marginRight: "auto",
      color: theme.palette.text.primary,
   },
}));

const Countries = () => {
   const { countries, isLoading } = useGlobalContext();
   const classes = useStyles();
   return (
      <Grid container item spacing={8}>
         {isLoading ? (
            <Grid item xs={3} className={classes.loading}>
               <CircularProgress className={classes.progress} />
            </Grid>
         ) : (
            countries.map((country) => {
               return (
                  <Grid xs={12} sm={6} md={3} item key={country.name}>
                     <SingleCountry country={country} />
                  </Grid>
               );
            })
         )}
      </Grid>
   );
};

export default Countries;
