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

function UpdateForm(props) {
  const [status, setStatus] = useState("");
  const [gameDetails, setGameDetails] = useState();
  const { gameApiId } = props;

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
    console.log(cookies.token);
    axios
      .post("https://gamejot-backend.onrender.com/gamejots", dataPost, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getGameDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>UpdateForm</div>
  )
}

export default UpdateForm