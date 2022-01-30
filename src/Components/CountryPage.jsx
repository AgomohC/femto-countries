import React, { useEffect } from "react";
import {
   makeStyles,
   Grid,
   Button,
   Typography,
   CircularProgress,
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
      maxHeight: "20vh",
      display: "flex",
      alignItems: "center",

      [theme.breakpoints.up("sm")]: {
         maxHeight: "55vh",
      },
      minHeight: "160px",
      marginTop: theme.spacing(8),

      marginBottom: theme.spacing(4),
   },
   img: {
      position: "absolute",
      width: "100%",
      height: "auto",
   },
   textContainer: {
      [theme.breakpoints.up("md")]: {
         marginTop: 0,
         marginBottom: 0,
      },
      marginTop: theme.spacing(8),

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
      display: "flex",
      justifyContent: "center",
   },
   progress: {
      marginLeft: "auto",
      marginRight: "auto",
      color: theme.palette.text.primary,
   },
   chipContainer: {
      display: "flex",
      alignItems: "baseline",
      flexWrap: "wrap",
   },
   chipLink: {
      marginLeft: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
         marginTop: theme.spacing(2),
      },
      marginTop: theme.spacing(2),

      color: "inherit",
      textDecoration: "none",
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
   const renderBorder = (borders) => {
      const border = borders.map((border) => {
         return (
            <Link
               key={border}
               className={classes.chipLink}
               to={`/alpha/${border}`}
            >
               <Button size="small" variant="contained" color="primary">
                  {border}
               </Button>
            </Link>
         );
      });
      return border;
   };

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
                     <Button
                        startIcon={<ArrowBackIcon />}
                        variant="contained"
                        color="primary"
                     >
                        Back
                     </Button>
                  </Link>
               </Grid>
               <Grid
                  container
                  item
                  alignItems="center"
                  className={classes.container2}
               >
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
                                 {renderBorder(borders)}
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
