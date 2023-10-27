import React, { useState, useEffect } from "react";
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
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import cookie from "cookie";
import { useNavigate } from "react-router-dom";

function UpdateForm(props) {
  const [status, setStatus] = useState("");
  const [gameDetails, setGameDetails] = useState();
  const { gameApiId } = props;
  const navigate = useNavigate();

  const getGameDetails = () => {
    let apiKey = process.env.REACT_APP_APIKEY;

    axios
      .get(`https://api.rawg.io/api/games/${gameApiId}?key=${apiKey}`)
      .then((res) => {
        console.log(res.data);
        setGameDetails(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const dataPost = {
    game_title: gameDetails?.name,
    game_year: gameDetails?.released.slice(0, 4),
    game_dev: gameDetails?.developers[0].name,
    status: status,
    game_id: gameApiId,
  };

  const submitPost = (e) => {
    e.preventDefault();
    const cookies = cookie.parse(document.cookie);
    // console.log(cookies.token);
    axios
      .put(
        `https://gamejot-backend.onrender.com/gamejots/${gameApiId}`,
        dataPost,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/gamejots");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const deletePost = (e) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this gamejot?"
    );
    if (confirmDelete) {
      const cookies = cookie.parse(document.cookie);
      // console.log(cookies.token);
      axios
        .delete(`https://gamejot-backend.onrender.com/gamejots/${gameApiId}`, {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        })
        .then((res) => {
          console.log(res);
          navigate("/gamejots");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    getGameDetails();
    // eslint-disable-next-line
  }, []);

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
        <Typography component="h1" variant="h5" sx={{ fontFamily: "Neue Haas Bold" }}>
          Edit Game
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: "#F0EEE7" }}>
          <GamesIcon />
        </Avatar>
        <CardMedia
          component="img"
          height="160vh"
          image={gameDetails?.background_image}
          alt="Game Background"
          sx={{
            borderRadius: "10px", // Adjust Border
            marginTop: 1,
          }}
        />
        <Box component="form" sx={{ mt: 1 }} onSubmit={submitPost}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            placeholder="Game Title"
            value={gameDetails?.name}
            InputProps={{
              readOnly: true,
              style: { pointerEvents: "none" },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="number"
            placeholder="Game Year"
            value={gameDetails?.released.slice(0, 4)}
            InputProps={{
              readOnly: true,
              style: { pointerEvents: "none" },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            placeholder="Game Dev"
            value={gameDetails?.developers[0].name}
            InputProps={{
              readOnly: true,
              style: { pointerEvents: "none" },
            }}
          />
          <FormControl
            fullWidth
            sx={{
              marginTop: 2,
            }}
          >
            <InputLabel>Edit Status</InputLabel>
            <Select
              label="Status"
              onChange={handleChange}
              value={status}
              required
            >
              <MenuItem value="watchlist">Watchlist</MenuItem>
              <MenuItem value="started">Started</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 1,
              bgcolor: "#9E6305",
              ":hover": {
                bgcolor: "#BD9066",
                color: "white",
              },
            }}
          >
            Update Status
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            onClick={deletePost}
            sx={{
              mt: 1,
              mb: 1,
              bgcolor: "#E61E14",
              ":hover": {
                bgcolor: "#FF6E61",
                color: "white",
              },
            }}
          >
            Delete
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

export default UpdateForm;
