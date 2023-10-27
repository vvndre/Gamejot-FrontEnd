import React from "react";
import GamesList from "../components/GamesList";
import { Typography } from "@mui/material";

function Dashboard() {
  return (
    <>
      <Typography
        sx={{ mt: 2, fontFamily: "Neue Haas Bold" }}
        align="center"
        variant="h3"
        component="div"
      >
        Dashboard
      </Typography>
      <GamesList />
    </>
  );
}

export default Dashboard;
