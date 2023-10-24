import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import { Navigate } from "react-router-dom";
import cookie from "cookie";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import AddGame from "./pages/AddGame";
import MyGames from "./pages/MyGames";
import EditGame from "./pages/EditGame";

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
          element={<ProtectedRoute component={Dashboard} />}
          path="/dashboard"
        />
        <Route
          element={<ProtectedRoute component={AddGame} />}
          path="/add-game/:id"
        />
        <Route
          element={<ProtectedRoute component={MyGames} />}
          path="/gamejots"
        />
        <Route
          element={<ProtectedRoute component={EditGame} />}
          path="/edit-game/:id"
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
