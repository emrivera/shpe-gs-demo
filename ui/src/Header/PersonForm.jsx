import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import SubmitableCard from "../SubmitableCard";
import { postPerson } from "../utils/api";

export default function PersonForm() {
  const [personName, setPerson] = useState();

  const handleSubmit = async () => {
    postPerson({ name: personName.trim() });
  };

  const handleCancel = () => {};

  return (
    <SubmitableCard
    title="Person"
    headerButtonText="Add Person"
    onSubmit={handleSubmit}
    onCancel={handleCancel}
    >
      <TextField label="Name" onChange={(e) => setPerson(e.target.value)} />
    </SubmitableCard>
  )
}