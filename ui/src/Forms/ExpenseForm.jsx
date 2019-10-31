import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import SubmitableCard from "../common/SubmitableCard";
import { fetchPeople, postExpense } from "../utils/api";
import MultiSelect from "../common/MultiSelect";


export default function ExpenseForm({ onComplete, onCancel }) {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState();
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSubmit = () => {
    const payload = {
      expenseName: expenseName.trim(),
      amount,
      people: selected.map(person => person.id)
    };

    postExpense(payload)
      .then(expense => {
        onComplete(expense);
      })
      .finally(() => {
        clearState();
      });
  };

  const handleShow = () => {
    fetchPeople()
      .then(people => {
        setPeople(people);
      })
      .catch(() => {
        console.error('Error fetching from server');
        setPeople([]);
      })
  };

  const handleCancel = () => {
    clearState();
    onCancel();
  };

  const clearState = () => {
    setExpenseName('');
    setAmount();
    setPeople([]);
    setSelected([]);
  };

  const handleChange = (e) => {
    console.log('person: ', e.target.value);
    setSelected(e.target.value);
  };

  return (
    <SubmitableCard
      headerButtonText="Add expense"
      title="Expense"
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onShow={handleShow}
    >
      {/* Text Field for Expense */}
      {/* Text Field for Amount */}
      {/* MultiSelect */}
      <TextField required label="Expense" onChange={(e) => setExpenseName(e.target.value)} />
      <TextField required label="Amount" onChange={(e) => setAmount(e.target.value)} />
      <MultiSelect
        title="People"
        selectedValues={selected}
        options={people}
        onChange={handleChange}
        labelGetter={(person) => person.name}
      />
    </SubmitableCard>
  )
}