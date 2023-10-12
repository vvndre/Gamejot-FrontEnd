// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";

function Login(props) {
  //console.log(props)
  const { setIsLoggedIn } = props;
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const returningUser = {
      ...state,
    };
    returningUser[e.target.name] = e.target.value;
    setState(returningUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://gamejot-backend.onrender.com/login", {
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        // setting a new cookie
        document.cookie = cookie.serialize("loggedIn", "true", {
          maxAge: 600000,
        });
        //calling prop
        setIsLoggedIn(true);

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "#F0EEE7" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={state.email}
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={state.password}
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#9E6305",
              ":hover": {
                bgcolor: "#BD9066", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            Sign In
          </Button>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
