import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import GamesList from "./components/GamesList";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import NavBar from "./components/NavBar";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

function Router() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Tells navbar to rerender when loggedIn

  useEffect(() => {
    const cookies = cookie.parse(document.cookie);
    if (cookies.loggedIn === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, setIsLoggedIn]); //Runs state again
  // pass this as a prop to the loggedin route
  console.log(isLoggedIn);

  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
          path="/login"
        />
        <Route element={<Register />} path="/register" />
        <Route
          element={<ProtectedRoute component={GamesList} />}
          path="/gameslist"
        />
      </Routes>
    </>
  );
}

export default Router;
