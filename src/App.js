import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    const name = 'Patrik';
    const loading = true;
    const numbers = [1, 2, 3, 4];

    if (!loading) {
      return <h4>Loading...</h4>;
    }

    const foo = () => 'Bar';

    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
      </div>
    );
  }
}

export default App;
