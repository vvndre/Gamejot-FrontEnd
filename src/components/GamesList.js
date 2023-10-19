import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Paper, Grid, Box } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  borderRadius: "15px",
  color: theme.palette.text.secondary,
}));

function GamesList() {
  const [gamesList, setGamesList] = useState([]);
  const [gamesApiList, setGamesApiList] = useState([]);

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
        // console.log(res.data)
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
  // console.log(gamesApiList);

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
            <Item>
              <img
                src={game.background_image}
                alt="{game.slug}"
                height="150px"
                width="300px"
                maxWidth="100%"
              />
              <h4>{game.name}</h4>
              <Link to={`/add-game/${game.id}`}>Add to My Gamejots</Link>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GamesList;
