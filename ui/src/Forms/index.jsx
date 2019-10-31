import React from 'react';

import ExpenseForm from './ExpenseForm';
import PersonForm from './PersonForm';

import './index.scss';

export default function Forms() {
  return (
    <div className="Forms">
      <ExpenseForm />
      <PersonForm />
    </div>
  );
}