import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   media: {
      height: "150px",
   },
   bold: {
      fontWeight: "bold",
   },
   link: {
      color: "inherit",
      textDecoration: "none",
   },
}));

const SingleCountry = (props) => {
   const classes = useStyles();

   const {
      country: { png, name, region, capital, population, alpha3Code },
   } = props;
   return (
      <Card>
         <CardActionArea>
            <Link className={classes.link} to={`/alpha/${alpha3Code}`}>
               <CardMedia image={png} title={name} className={classes.media} />
               <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                     {name}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     <span className={classes.bold}>Population:</span>{" "}
                     {new Intl.NumberFormat("en-UK").format(population)}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     <span className={classes.bold}>Capital:</span> {capital}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     <span className={classes.bold}>Region:</span> {region}
                  </Typography>
               </CardContent>
            </Link>
         </CardActionArea>
      </Card>
   );
};

export default SingleCountry;
