import React from "react";
import SingleCountry from "./SingleCountry";
import { Grid } from "@material-ui/core";
import { useGlobalContext } from "../Context/appContext";

const Countries = () => {
   const { countries } = useGlobalContext();

   return (
      <Grid container item spacing={8}>
         {countries.map((country) => {
            return (
               <Grid xs={12} sm={6} md={3} item key={country.name}>
                  <SingleCountry country={country} />
               </Grid>
            );
         })}
      </Grid>
   );
};

export default Countries;
