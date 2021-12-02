import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
   media: {
      height: "140px",
   },
   bold: {
      fontWeight: "bold",
   },
}));

const SingleCountry = (props) => {
   const classes = useStyles();
   const {
      country: { png, name, region, capital, population },
   } = props;
   return (
      <Card>
         <CardActionArea>
            <CardMedia image={png} title={name} className={classes.media} />
            <CardContent>
               <Typography gutterBottom variant="h6" component="h2">
                  {name}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.bold}>Population:</span>{" "}
                  {new Intl.NumberFormat("en-UK").format(population)}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.bold}>Capital:</span> {capital}
               </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.bold}>Region:</span> {region}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default SingleCountry;
