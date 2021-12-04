import React, { useEffect } from "react";
import {
   makeStyles,
   Grid,
   Button,
   Typography,
   CircularProgress,
   Chip,
} from "@material-ui/core";
import { useGlobalContext } from "../Context/appContext";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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
      minHeight: "160px",
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
   loading: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(10),
   },
   progress: {
      marginLeft: "auto",
      marginRight: "auto",
   },
   chipContainer: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
   },
   chip: {
      marginLeft: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
         marginTop: theme.spacing(2),
      },
   },
   lang: {
      [theme.breakpoints.down("sm")]: {
         marginTop: theme.spacing(2),
      },
   },
}));

const CountryPage = (props) => {
   const {
      match: {
         params: { code },
      },
   } = props;
   const { getSingleCountry, isLoading } = useGlobalContext();

   useEffect(() => {
      getSingleCountry(code);
   }, [code, getSingleCountry]);
   const { singleCountry } = useGlobalContext();
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
      borders,
   } = singleCountry;

   const classes = useStyles();
   return (
      <>
         {isLoading ? (
            <Grid container item xs={10} className={classes.container}>
               <Grid item xs={3} className={classes.loading}>
                  <CircularProgress className={classes.progress} />
               </Grid>
            </Grid>
         ) : (
            <Grid container item xs={10} className={classes.container}>
               <Grid xs={6} md={2} item className={classes.btn}>
                  <Link className={classes.link} to={"/"}>
                     <Button startIcon={<ArrowBackIcon />} variant="contained">
                        Back to home
                     </Button>
                  </Link>
               </Grid>
               <Grid container item className={classes.container2}>
                  <Grid
                     item
                     xs={12}
                     sm={7}
                     md={5}
                     className={classes.imgContainer}
                  >
                     <img src={flags} alt={name} className={classes.img} />
                  </Grid>
                  <Grid
                     item
                     container
                     xs={12}
                     md={6}
                     className={classes.textContainer}
                  >
                     <Grid item xs={12}>
                        <Typography
                           variant="h5"
                           component="p"
                           color="initial"
                           className={classes.bold}
                        >
                           {name}
                        </Typography>
                     </Grid>
                     <Grid item xs={12} sm={6} className={classes.lang}>
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
                     <Grid item xs={12} sm={6} className={classes.lang}>
                        <Typography
                           variant="body2"
                           component="p"
                           color="initial"
                           className={classes.bottom}
                        >
                           <span className={classes.bold}>
                              Top Level Domain:
                           </span>
                           {topLevelDomain ? topLevelDomain.join(", ") : ""}
                        </Typography>
                        <Typography
                           variant="body2"
                           component="p"
                           color="initial"
                           className={classes.bottom}
                        >
                           <span className={classes.bold}>Currencies: </span>
                           {currencies
                              ? currencies
                                   .map((currency) => {
                                      const { name } = currency;
                                      return name;
                                   })
                                   .join(", ")
                              : ""}
                        </Typography>
                        <Typography
                           variant="body2"
                           component="p"
                           color="initial"
                           className={classes.bottom}
                        >
                           <span className={classes.bold}>Languages: </span>
                           {languages
                              ? languages
                                   .map((language) => {
                                      const { name } = language;
                                      return name;
                                   })
                                   .join(", ")
                              : ""}
                        </Typography>
                     </Grid>
                     <Grid item xs={12} className={classes.chipContainer}>
                        {borders ? (
                           <>
                              <Typography
                                 variant="body2"
                                 component="p"
                                 color="initial"
                                 className={classes.bold}
                                 style={{ marginRight: "8px" }}
                              >
                                 Border Countries:
                              </Typography>
                              <div className={classes.chipContainer}>
                                 {borders.map((border) => (
                                    <Chip
                                       className={classes.chip}
                                       square
                                       label={border}
                                    />
                                 ))}
                              </div>
                           </>
                        ) : (
                           ""
                        )}
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         )}
      </>
   );
};

export default CountryPage;
