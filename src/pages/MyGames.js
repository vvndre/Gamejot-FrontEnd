import React, { useEffect, useState } from "react";
import cookie from "cookie";
import axios from "axios";
import Gamejots from "../components/Gamejots";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function MyGames() {
  const [gamesList, setGamesList] = useState([]);

  const fetchPostByUser = () => {
    const cookies = cookie.parse(document.cookie);

    axios
      .get("https://gamejot-backend.onrender.com/user/posts", {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGamesList(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPostByUser();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
      {gamesList.map((game) => (
        <Gamejots game={game} key={game.game_id} />
      ))}

      </Grid>
    </Box>
  );
}

export default MyGames;
