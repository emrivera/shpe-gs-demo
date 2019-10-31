import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import SubmitableCard from "../SubmitableCard";

export default function PersonForm({ onComplete, onCancel }) {
  const [person, setPerson] = useState();

  const handleSubmit = () => {
    const payload = {
      person
    };
    onComplete(payload);
  };

  const handleCancel = () => {
    onCancel();
  };

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