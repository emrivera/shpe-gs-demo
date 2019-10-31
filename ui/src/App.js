import React, { useState } from 'react';
import './App.scss';
import Forms from './Header';
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
  const [people, setPeople] = useState([]);

  const handleAddExpense = (payload) => {
    setData(data => [...data, { ...payload, people: ['Rosbel', 'Eddy', 'Emy'] }]);
  };

  const handleAddPerson = (payload) => {
    setPeople(people => [...people, payload]);
  };

  return (
    <div className="App">
      <Forms onAddExpense={handleAddExpense} onAddPerson={handleAddPerson} />
      <Grid data={data} />
      {
        people.map(({ person }) => (
          <div key={person}>{person}</div>
        ))
      }
    </div>
  );
}

export default App;