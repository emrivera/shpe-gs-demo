import React, { useEffect, useState } from 'react';
import './App.scss';
import Forms from './Forms';
import Grid from './Grid';
import { fetchExpenses } from "./utils/api";


function App() {
  const [data, setData] = useState([]);

  const onAddExpense = () => {
    fetchExpenses().then(expenses => {
      setData(expenses);
    });
  };

  useEffect(() => {
    fetchExpenses().then(expenses => {
      setData(expenses);
    });
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <h2>SHPE Demo - Budgeting Tool</h2>
      </div>
      <Forms onAddExpense={onAddExpense} />
      <Grid data={data} />
    </div>
  );
}

export default App;