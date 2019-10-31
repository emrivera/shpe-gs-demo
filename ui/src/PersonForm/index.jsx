import React, { useState } from 'react';
import { TextField } from "@material-ui/core";
import SubmitableCard from "../SubmitableCard";
import { postData } from "../utils/api";

export default function PersonForm({ onComplete, onCancel }) {
  const [person, setPerson] = useState();

  const handleSubmit = async () => {
    const payload = {
      person
    };
    // TODO - POST Person
    const response = await postData('http://localhost:8081/api/person');
    console.log({ response });
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