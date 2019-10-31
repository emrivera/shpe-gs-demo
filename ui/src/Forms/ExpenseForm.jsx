import React, { useState } from 'react';

export default function ExpenseForm({ onComplete, onCancel }) {
  const [expenseName, setExpenseName] = useState('');
  const [amount, setAmount] = useState();
  const [people, setPeople] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleSubmit = () => {
    // Set up payload, Server expects
    // {
    //    expenseName: 'StringWithNoSpaces',
    //    amount: double
    //    people: array of ids
    // }

    // Send payload to server, and call complete to let parent component know an expense was added

    // Clear state so that people are not pre-selected when adding a new expense
  };

  const handleShow = () => {
    // When opening th card, we should fetch for all people to make sure we have the latest
  };

  const handleCancel = () => {
    // What should we do when user selects cancel?
  };

  const clearState = () => {
    setExpenseName('');
    setAmount();
    setPeople([]);
    setSelected([]);
  };

  /*
   Card that renders a button and when pressed renders more elements
   Text Field for Expense
   Text Field for Amount
   MultiSelect to add people
 */

  return null;

}