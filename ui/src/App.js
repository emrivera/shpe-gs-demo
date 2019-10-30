import React, { Component, useState } from 'react';
import './App.scss';
import Header from './Header';
import Grid from './Grid';

const initialData = [{
  expense: 'Netflix',
  people: ['Rosbel', 'Emy', 'Eddy'],
  total: 12
},
  {
    expense: 'Cable',
    people: ['Rosbel', 'Bob'],
    total: 100
  }
];

function App() {
  const [data, setData] = useState(initialData);

  const handleAddExpense = (payload) => {
    setData(data => [...data, { ...payload, people: ['Rosbel', 'Eddy', 'Emy'] }]);
  };

  return (
    <div className="App">
      <Header onAdd={handleAddExpense} />
      <Grid data={data} />
    </div>
  );
}

export default App;