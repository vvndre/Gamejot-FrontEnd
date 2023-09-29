import React, { useState, useEffect } from "react";
import axios from "axios";

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
      .get("http://localhost:3000/gamejot")
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
  console.log(gamesList);
  console.log(gamesApiList);

  return (
    <div>
      {gamesList.map((game) => (
        <div key={game.post_id}>
          <p>{game.game_title}</p>
        </div>
      ))}
    </div>
  );
}

export default GamesList;
