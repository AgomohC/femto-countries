import React from "react";
import {
   makeStyles,
   Typography,
   AppBar,
   Toolbar,
   IconButton,
} from "@material-ui/core";
import Brightness2OutlinedIcon from "@material-ui/icons/Brightness3Outlined";
import Brightness2Icon from "@material-ui/icons/Brightness3";
import { useGlobalContext } from "../Context/appContext";

const useStyles = makeStyles((theme) => ({
   toolbar: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(8),
         marginRight: theme.spacing(8),
      },
   },
   title: {
      flexGrow: 1,
   },
   flex: {
      display: "flex",
      alignItems: "center",
   },
}));

const Header = () => {
   const classes = useStyles();
   const { setDarkMode, isDarkMode } = useGlobalContext();
   return (
      <>
         <AppBar position="fixed" color="primary">
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
         </AppBar>
      </>
   );
};

export default Header;
