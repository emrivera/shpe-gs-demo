import React, { useEffect, useState } from 'react';

import { TextField } from '@material-ui/core';
import SubmitableCard from "../SubmitableCard";
import { getData } from "../utils/api";

export default function ExpenseForm({ onComplete, onCancel }) {
  const [expense, setExpense] = useState('');
  const [total, setTotal] = useState();
  const [people, setPeople] = useState([]);

  const handleSubmit = () => {
    const payload = {
      expense,
      total
    };
    // POST Expense
    onComplete(payload);
  };

  useEffect(() => {
    const getPeople = async () => {
      const people = await getData('http://localhost:8081/api/people');
      setPeople(people);
    };
    getPeople();
  }, []);

  return (
    <SubmitableCard
      headerButtonText="Add expense"
      title="Expense"
      onSubmit={handleSubmit}
      onCancel={onCancel}
    >
      <TextField label="Expense" onChange={(e) => setExpense(e.target.value)} />
      <TextField label="Total" onChange={(e) => setTotal(e.target.value)} />
    </SubmitableCard>
  )
}