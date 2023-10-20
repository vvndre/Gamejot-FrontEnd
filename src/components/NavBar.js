import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/Logos/gamejot-7.png";
import cookie from "cookie";

export default function NavBar(props) {
  const { setIsLoggedIn, isLoggedIn } = props;
  const cookies = cookie.parse(document.cookie);
  console.log(cookies.loggedIn);

  const handleLogout = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
      maxAge: 0,
    });
    setIsLoggedIn(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#20232A" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Toolbar sx={{ flexGrow: 1 }}>
            <a href="/">
              <Box
                component="img"
                sx={{
                  width: 150,
                }}
                alt="Your logo."
                src={Logo}
                href="/"
              />
            </a>
          </Toolbar>
          {isLoggedIn ? (
            <>
              <Button href="/dashboard" color="inherit">Dashboard</Button>
              <Button href="/gamejots" color="inherit">My Gamejots</Button>
              <Button onClick={handleLogout} href="/" >
                Logout
              </Button>
            </>
          ) : (
            <Button href="/login" color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
