import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
