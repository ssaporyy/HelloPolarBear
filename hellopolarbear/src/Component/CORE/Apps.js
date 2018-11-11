import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import What from '../What/Index';
import Who from '../Who/Index';
import Where from '../Where/Index';
import Contact from '../Contact';
import Card from './Card'
import Landing from '../landing';
import styled from 'styled-components'
import PolarBear from '../../PolarBear/PolarBear';


const hello = `Hello`
const bear = `Polar Bear`
const world = `${hello} World`
const hastag = `#${world} #PolarBear #HelloPolarBear `
const hastag2 = `#HelloFrontEnd #HelloDesign #HelloGame #HelloInfra`

const Background = styled.div`
    width: 100vw;
    height: 100%;
    overflow-x: hidden; 
    background: linear-gradient(#151516,#13191F ,#0D2339 ,#033362 ,#00376D ,#0C4B7D ,#297CA5 ,#347DA9 ,#5281B3 ,#8286C4 ,#8987C6 ,#F2F2F2 );
`

const BG = styled.div`
  background: #000;
  font-family:  'Mitr',tahoma;
  text-align:center;
  color : white;
`

const BG1 = styled.div`
  background: url('static/img/bg1.png');
    background-size: 10px;
    width: 100vw;
    height: 100%;
    overflow-x: hidden; 
    
    
    
    

    


`

class App extends Component {
  render() {
    return (
      <BG>
      <Landing />
        <Background className="container">
          <section>
            <div className="card text-blue bg--blue" />
            <PolarBear />
            <p><hastag /></p>
            <p><hastag2 /></p>
          </section>
        
        
        
        
          
          <section>
            <What />
          </section>
          <section>
            <Who  />
          </section>
          <section>
            <Where />
          </section>
          <section>
            <Contact />
          </section>
          </Background>
      </BG>
    );
  }
}

export default App;