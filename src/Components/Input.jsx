import React from "react";
import {
   makeStyles,
   Grid,
   FormControl,
   InputLabel,
   NativeSelect,
   InputBase,
   alpha,
   Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useGlobalContext } from "../Context/appContext";

const useStyles = makeStyles((theme) => ({
   container: {
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: "auto",
      marginRight: "auto",
   },
   item1: {
      marginRight: theme.spacing(3),
      marginBottom: theme.spacing(3),

      [theme.breakpoints.up("sm")]: {
         marginBottom: 0,
      },
   },
   item2: {
      marginRight: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
         marginRight: theme.spacing(0),
      },
   },
   select: {
      width: "100%",
   },
   selectColor: {
      padding: theme.spacing(1),

      backgroundColor: theme.palette.primary.main,
      "&:hover": {
         backgroundColor: alpha(theme.palette.primary.main, 0.6),
      },
   },
   search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
         backgroundColor: alpha(theme.palette.primary.main, 0.6),
      },
      padding: theme.spacing(1),
      alignItems: "center",

      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "auto",
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   inputRoot: {
      color: "inherit",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
         width: "20ch",
      },
   },
}));

const Input = () => {
   const classes = useStyles();
   const { searchValue, setSearchValue, setSelectValue, selectValue } =
      useGlobalContext();

   return (
      <>
         <Grid container xs={10} className={classes.container}>
            <Grid item xs={12} sm={5} className={classes.item1}>
               <Paper className={classes.search}>
                  <div className={classes.searchIcon}>
                     <SearchIcon />
                  </div>
                  <InputBase
                     placeholder="Search???"
                     value={searchValue}
                     color="primary"
                     onChange={(event) => {
                        const value = event.target.value;
                        return setSearchValue(value);
                     }}
                     classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                     }}
                  />
               </Paper>
            </Grid>
            <Grid item xs={5} sm={4} md={3} className={classes.item2}>
               <FormControl className={classes.select}>
                  <InputLabel>Filter by Region</InputLabel>
                  <NativeSelect
                     value={selectValue}
                     onChange={(event) => {
                        const value = event.target.value;
                        return setSelectValue(value);
                     }}
                     className={classes.selectColor}
                  >
                     <option value="All">All</option>
                     <option value="africa">Africa</option>
                     <option value="americas">Americas</option>
                     <option value="asia">Asia</option>
                     <option value="europe">Europe</option>
                     <option value="oceania">Oceania</option>
                  </NativeSelect>
               </FormControl>
            </Grid>
         </Grid>
      </>
   );
};

export default Input;
