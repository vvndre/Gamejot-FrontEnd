import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import GamesIcon from "@mui/icons-material/Games";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function GameForm() {
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setStatus(e.target.value);
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
          Add Game
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "#F0EEE7" }}>
          <GamesIcon />
        </Avatar>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            placeholder="Game Title"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            placeholder="Game Year"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            placeholder="Game Dev"
          />
          <FormControl
            fullWidth
            sx={{
              marginTop: 2,
            }}
          >
            <InputLabel>Status</InputLabel>
            <Select label="Status" onChange={handleChange} value={status}>
              <MenuItem value="Watchlist">Watchlist</MenuItem>
              <MenuItem value="Started">Started</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
            </Select>
          </FormControl>
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
            Add Game
          </Button>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          ></Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default GameForm;
