import React, { useState } from 'react';

import { Select, TextField } from '@material-ui/core';
import SubmitableCard from "../SubmitableCard";
import { fetchPeople, postExpense } from "../utils/api";
import InputLabel from "@material-ui/core/InputLabel";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


function getStyles(id, array) {
  return {
    fontWeight: array.indexOf(id) === -1 ? 'bold' : ''
  }
}

export default function ExpenseForm({ onComplete, onCancel }) {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState();
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSubmit = () => {
    const payload = {
      expenseName,
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
      });
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
      <TextField required label="Expense" onChange={(e) => setExpenseName(e.target.value)} />
      <TextField required label="Amount" onChange={(e) => setAmount(e.target.value)} />
      <FormControl>
        <InputLabel id="multiple-people-select">People</InputLabel>
        <Select
          labelId="multiple-people-select"
          multiple
          required
          value={selected}
          onChange={handleChange}
          input={<Input id="multiple-people-select-input" />}
          renderValue={selected => (
            <div style={{ margin: 2, display: 'flex', flexWrap: 'wrap' }}>
              {selected.map(value => <Chip key={value.id} label={value.name} style={{ margin: 2 }} />)}
            </div>
          )}
        >
          {people.map(person => (
            <MenuItem key={person.id} value={person} style={getStyles(person, people)}>
              {person.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SubmitableCard>
  )
}