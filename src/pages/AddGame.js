import React from "react";
import GameForm from "../components/GameForm";
import { useParams } from "react-router-dom";

function AddGame() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <GameForm gameApiId={id} />
    </>
  );
}

export default AddGame;
