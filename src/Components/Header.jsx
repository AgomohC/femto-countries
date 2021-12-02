import React from "react";
import {
   makeStyles,
   Typography,
   AppBar,
   Toolbar,
   IconButton,
   Grid,
} from "@material-ui/core";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness3Outlined";
import Brightness2Icon from "@material-ui/icons/Brightness3";
import { useGlobalContext } from "../Context/appContext";

const useStyles = makeStyles((theme) => ({
   title: {
      flexGrow: 1,
      paddingLeft: 0,
      paddingRight: 0,
   },
   flex: {
      display: "flex",
      alignItems: "center",
   },
   container2: {
      marginLeft: "auto",
      marginRight: "auto",
   },
   toolbar: {
      paddingLeft: 0,
      paddingRight: 0,
      flexGrow: 1,
   },
}));

const Header = () => {
   const classes = useStyles();
   const { setDarkMode, isDarkMode } = useGlobalContext();
   return (
      <>
         <AppBar position="fixed" color="primary">
            <Grid container xs={10} className={classes.container2}>
               <Toolbar className={classes.toolbar}>
                  <Typography
                     className={classes.title}
                     variant="body1"
                     component="h1"
                  >
                     Where in the World?
                  </Typography>
                  <div className={classes.flex}>
                     <IconButton color="inherit" onClick={() => setDarkMode()}>
                        {isDarkMode ? (
                           <Brightness2Icon />
                        ) : (
                           <Brightness2OutlinedIcon />
                        )}
                     </IconButton>
                     <Typography variant="body1" color="initial" component="h2">
                        Dark mode
                     </Typography>
                  </div>
               </Toolbar>
            </Grid>
         </AppBar>
      </>
   );
};

export default Header;
