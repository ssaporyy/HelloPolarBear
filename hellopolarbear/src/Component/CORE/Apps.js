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



const BG = styled.div`
  background: #000;
  font-family:  'Mitr',tahoma;
  text-align:center;
  color : white;
` 
const Icon = styled.div`
  background:url("/static/img/bgeiei.png");
  background-size: cover;
  background-repeat: no-repeat;
`
const Br =styled.div`
  margin: 1400px
`
const BrWhat =styled.div`
  margin: 700px

`
const BrWho =styled.div`
  margin: 500px
`
const BrWhere =styled.div`
  margin: 500px
`


class App extends Component {
  render() {
    return (
      
      <BG>
        <Icon>

      <Landing />
      
      
          <section id="home">
          
            <div className="card text-blue bg--blue" />
            <PolarBear />
            <p><hastag /></p>
            <p><hastag2 /></p>
            <Br className="mb">
          </Br>
          </section>

          <section id="what">
            <What />
            <BrWhat className="mb">
          </BrWhat>
          </section>
          <section id="who">
            <Who  />
            <BrWho className="mb">
            </BrWho>
          </section>
          <section id="where"> 
            <Where />
            <BrWhere className="mb">
            </BrWhere>
          </section>
          <section id="contact">
            <Contact />
          </section>
                    
          </Icon>
          
         
         
          
          
      </BG>
      
     
      
    );
  }
}

export default App;