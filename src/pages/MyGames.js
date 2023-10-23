import React, { useEffect, useState } from "react";
import cookie from "cookie";
import axios from "axios";

function MyGames() {
  const [gamesList, setGamesList] = useState([]);

  const fetchPostByUser = () => {
    const cookies = cookie.parse(document.cookie);

    axios
      .get("https://gamejot-backend.onrender.com//user/posts", {
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
    <div>
      {gamesList.map((game) => (
        <div key={game}></div>
      ))}
    </div>
  );
}

export default MyGames;
