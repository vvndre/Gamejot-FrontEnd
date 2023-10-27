import React, { useState, useEffect } from "react";
import axios from "axios";
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

function GamesList() {
  // eslint-disable-next-line
  const [gamesList, setGamesList] = useState([]);
  const [gamesApiList, setGamesApiList] = useState([]);

  const theme = useTheme();

  const fetchGames = async () => {
    let maxPageSize = 5;
    let data = [];
    let apiKey = process.env.REACT_APP_APIKEY;

    for (let index = 1; index <= maxPageSize; index++) {
      try {
        const response = await axios.get(
          `https://api.rawg.io/api/games?key=${apiKey}&page=${index}`
        );
        data = [...data, ...response.data.results];
        setGamesApiList(data);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const getGames = () => {
    axios
      .get("https://gamejot-backend.onrender.com/gamejots")
      .then((res) => {
        setGamesList(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getGames();
    fetchGames();
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
        {gamesApiList.map((game) => (
          <Grid item xs={2} sm={4} md={4} key={game.id} sx={{ maxWidth: 345 }}>
            <Card sx={{ borderRadius: "15px" }}>
              <CardActionArea
                component={RouterLink}
                to={`/add-game/${game.id}`}
                sx={{
                  padding: theme.spacing(2),
                  textAlign: "center",
                  color: theme.palette.text.secondary,
                }}
              >
                <img
                  src={game.background_image}
                  alt="{game.slug}"
                  height="165px"
                  width="300px"
                  style={{ maxWidth: "100%" }}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontFamily: "Neue Haas Bold", mb: 1 }}
                  >
                    {game.name}
                  </Typography>
                  <Typography variant="p" component="div" color="#9E6305" sx={{fontFamily: "Neue Haas Reg"}}>
                    Add to My Gamejots
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesList;
