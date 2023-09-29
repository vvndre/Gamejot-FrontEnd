import React from "react";
// import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import styles from "./styles/styles";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider theme={styles}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
