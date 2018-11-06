import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import What from '../What/Index';
import Who from '../Who/Index';

const hello = `Hello`
const bear = `PolarBear`
const what = `what`

class App extends Component {
  render() {
    return (
      <div className="App">

        <What/>
        
        <Who/>
        
      </div>
    );
  }
}

export default App;