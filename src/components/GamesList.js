import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  console.log(gamesList);
  console.log(gamesApiList);

  return (
    // Create Cards
    <div>
      {gamesApiList.map((game) => (
        <div key={game.id}>
          <img
            alt={game.slug}
            src={game.background_image}
            style={{ width: "200px" }}
          />
          <p>{game.name}</p>
          <Link to="/add-game">Add to My List</Link>
        </div>
      ))}
    </div>
  );
}

export default GamesList;
