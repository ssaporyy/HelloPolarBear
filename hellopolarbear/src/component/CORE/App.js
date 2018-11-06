import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import What from '../What/Index';
import Who from '../Who/Index';
import Where from '../Where/Index';
import Contact from '../Contact/index';

const hello = `Hello`
const bear = `PolarBear`
const world = `${hello} World`
const hastag = `#${world} #PolarBear #HelloPolarBear `
const hastag2 = `#HelloFrontEnd #HelloDesign #HelloGame #HelloInfra`

class App extends Component {
  render() {
    return (
      <div>
        <h1>{hello} {bear}</h1>
        <p>{hastag}</p>
        <p>{hastag2}</p>
        
        <What/>
        
        <Who/>

        <Where/>

        <Contact/>
        
      </div>
    );
  }
}

export default App;