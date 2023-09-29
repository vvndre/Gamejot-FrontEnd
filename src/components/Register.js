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

function Register() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const loggedUser = {
      ...state,
    };
    loggedUser[e.target.name] = e.target.value;
    setState(loggedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", {
        username: state.username,
        email: state.email,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "#F0EEE7" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={state.username}
            name="username"
            type="text"
            onChange={handleChange}
            placeholder="Username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={state.email}
            name="email"
            type="email"
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
              <Link href="/login" variant="body2">
                {"Already have an account? Login!"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
