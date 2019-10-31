import React, { useEffect, useState } from 'react';
import './App.scss';
import Grid from './Grid';
import Forms from './Forms';


function App() {
  const [data, setData] = useState([]);

  const onAddExpense = () => {
    // Should be called when an expense was added
    // Need to fetch expenses
    // Update data to send to grid
  };

  useEffect(() => {
    // Called when application is initializing
    // pre-load with expenses already saved in the server
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <h2>SHPE Demo - Budgeting Tool</h2>
      </div>
      <Forms />
      <Grid data={data} />
    </div>
  );
}

export default App;