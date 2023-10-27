import React from "react";
import { useParams } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

function EditGame() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <UpdateForm gameApiId={id} />
    </>
  );
}

export default EditGame;
