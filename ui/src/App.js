import React, { useEffect, useState } from 'react';
import './App.scss';
import Forms from './Header';
import Grid from './Grid';
import { fetchExpenses } from "./utils/api";


function App() {
  const [data, setData] = useState([]);

  const handleAddExpense = () => {
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
      <Forms onAddExpense={handleAddExpense} />
      <Grid data={data} />
    </div>
  );
}

export default App;