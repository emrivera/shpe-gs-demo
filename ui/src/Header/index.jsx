import React, { useState } from 'react';
import './index.scss';

import Button from '@material-ui/core/Button';
import Form from '../Form';

export default function Header() {
  const [showForm, setShowForm] = useState(false);
  const handleAddExpense = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="Header">
      <h2>SHPE Demo - Budgeting Tool</h2>
      <div className="ActionBar">
        <Button variant="contained" color="primary" onClick={handleAddExpense} disabled={showForm}>
          Add Expense
        </Button>
      </div>
      <Form
        show={showForm}
        onComplete={(payload) => {
          console.log('Submitted: ', payload);
          setShowForm(false)
        }}
        onCancel={() => {
          console.log('Canceled');
          setShowForm(false)
        }}
      />
    </div>
  )
}