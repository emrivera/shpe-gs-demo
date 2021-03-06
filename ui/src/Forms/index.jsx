import React from 'react';

import ExpenseForm from './ExpenseForm';
import PersonForm from './PersonForm';

import './index.scss';

export default function Header({ onAddExpense }) {
  return (
    <div className="Forms">
      <ExpenseForm
        onComplete={(payload) => {
          console.log('Submitted: ', payload);
          onAddExpense(payload);
        }}
        onCancel={() => {
          console.log('Canceled');
        }}
      />
      <PersonForm />
    </div>
  );
}