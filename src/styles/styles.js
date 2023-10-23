import { createTheme, ThemeProvider } from "@mui/material/styles";

const styles = createTheme({
  palette: {
    mode: "dark",
    // info: "#A06124",
    primary: {
      main: "#9E6305", // Your custom primary color
    },
    secondary: {
      main: "#2196F3", // Your custom secondary color
    },
    // You can override other colors like error, warning, info, etc.
  },
});

export default styles;
