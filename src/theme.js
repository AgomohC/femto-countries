import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
   typography: {
      fontFamily: [
         "Nunito Sans",
         "Roboto",
         "Helvetica",
         "Arial",
         "sans-serif",
      ].join(","),
   },
});

export { ThemeProvider, theme };
