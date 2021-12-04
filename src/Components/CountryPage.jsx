import React, { useEffect } from "react";
import { makeStyles, Grid, Button, Typography } from "@material-ui/core";
import { useGlobalContext } from "../Context/appContext";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   container: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(10),
   },
   container2: {
      marginTop: theme.spacing(5),
      justifyContent: "space-between",
   },
   btn: {
      marginTop: theme.spacing(4),
   },
   link: {
      color: "inherit",
      textDecoration: "none",
   },
   imgContainer: {
      position: "relative",
      width: "100%",
      height: "50vh",
   },
   img: {
      position: "absolute",
      width: "100%",
      height: "100%",
   },
   textContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
   },
   bold: {
      fontWeight: "bold",
   },
   bottom: {
      marginBottom: theme.spacing(1),
   },
}));

const CountryPage = (props) => {
   const {
      match: {
         params: { code },
      },
   } = props;
   const { getSingleCountry } = useGlobalContext();

   useEffect(() => {
      getSingleCountry(code);
   }, [code, getSingleCountry]);
   const { singleCountry } = useGlobalContext();
   console.log(singleCountry);
   const {
      name,
      region,
      capital,
      population,
      subregion,
      flags,
      topLevelDomain,
      languages,
      nativeName,
      currencies,
   } = singleCountry;
   const newLanguage = languages
      .map((language) => {
         const { name } = language;
         return name;
      })
      .join(", ");
   const newCurrency = currencies
      .map((currency) => {
         const { name } = currency;
         return name;
      })
      .join(", ");
   const domain = topLevelDomain.join(", ");
   const classes = useStyles();
   return (
      <Grid container item xs={10} className={classes.container}>
         <Grid xs={6} md={2} item className={classes.btn}>
            <Link className={classes.link} to={"/"}>
               <Button variant="contained" color="primary">
                  Back to home
               </Button>
            </Link>
         </Grid>
         <Grid container item className={classes.container2}>
            <Grid item xs={12} sm={5} className={classes.imgContainer}>
               <img src={flags} alt={name} className={classes.img} />
            </Grid>
            <Grid
               item
               container
               xs={12}
               sm={6}
               className={classes.textContainer}
            >
               <Grid item xs={12}>
                  <Typography
                     variant="h6"
                     component="p"
                     color="initial"
                     className={classes.bold}
                  >
                     {name}
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Native Name: </span>
                     {nativeName}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Population: </span>
                     {new Intl.NumberFormat("en-UK").format(population)}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Region: </span>
                     {region}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Sub Region: </span>
                     {subregion}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Capital: </span>
                     {capital}
                  </Typography>
               </Grid>
               <Grid item xs={12} sm={6}>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Top Level Domain: </span>
                     {domain}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Currencies: </span>
                     {newCurrency}
                  </Typography>
                  <Typography
                     variant="body2"
                     component="p"
                     color="initial"
                     className={classes.bottom}
                  >
                     <span className={classes.bold}>Languages: </span>
                     {newLanguage}
                  </Typography>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default CountryPage;
