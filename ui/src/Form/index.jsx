import React, { useState } from 'react';
import './index.scss';

import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';

export default function Form({ show = false, onComplete, onCancel }) {
  const [expense, setExpense] = useState('');
  const [total, setTotal] = useState();
  // TODO  - implement people
  const [people, setPeople] = useState([]);

  const handleComplete = () => {
    const payload = {
      expense,
      total,
      people
    };
    onComplete(payload);
  };

  if (!show) {
    return null;
  }

  return (
    <Card className="Form">
      <CardHeader>
        Form
      </CardHeader>
      <CardContent className="Content">
        <TextField label="Expense" onChange={(e) => setExpense(e.target.value)} />
        <TextField label="Total" onChange={(e) => setTotal(e.target.value)} />
        {/* TODO - Add ability to add multiple people */}
        <div className="Buttons">
          <Button onClick={handleComplete} variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={onCancel} variant="contained" color="secondary">
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}