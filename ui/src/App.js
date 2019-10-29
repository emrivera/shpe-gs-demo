import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid />
      </div>
    );
  }
}

export default App;