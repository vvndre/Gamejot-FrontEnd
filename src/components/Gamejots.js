import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Gamejots(props) {
  const { game } = props;
  const [gameDetails, setGameDetails] = useState();
  console.log(game.game_id);

  const theme = useTheme();

  const upperStatus =
    game.status.charAt(0).toUpperCase() + game.status.slice(1);

  const getGameDetails = () => {
    let apiKey = process.env.REACT_APP_APIKEY;

    axios
      .get(`https://api.rawg.io/api/games/${game.game_id}?key=${apiKey}`)
      .then((res) => {
        // console.log(res.data);
        setGameDetails(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getGameDetails();
  }, []);
  // console.log(gameDetails);

  return (
    <Grid item xs={2} sm={4} md={4} sx={{ maxWidth: 345 }}>
      <Card sx={{ borderRadius: "15px" }}>
        <CardActionArea
          component={RouterLink}
          to={`/edit-game/${gameDetails?.id}`}
          sx={{
            padding: theme.spacing(2),
            textAlign: "center",
            color: theme.palette.text.secondary,
          }}
        >
          <img
            src={gameDetails?.background_image}
            alt="{game.slug}"
            height="165px"
            width="300px"
            style={{ maxWidth: "100%" }}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {gameDetails?.name}
            </Typography>
            <Typography variant="h6" component="div">
              {upperStatus}
            </Typography>
            <Typography variant="p" component="div" color="#9E6305">
              Edit My Gamejot
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Gamejots;
