import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Who from './Component/Index/Who';
import Where from './Component/Index/Where';
import Contact from './Component/Index/Contact';
import What from './Component/Index/What';

const hello = `Hello`
const bear = `PolarBear`

class App extends Component {
  render() {
    return (
      <div className="App">

        <What/>

        <Who/>

        <Where/>

        <Contact/>
      </div>
    );
  }
}

export default App;