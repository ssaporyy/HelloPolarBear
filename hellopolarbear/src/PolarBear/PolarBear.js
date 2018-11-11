import React from 'react'
import styled from 'styled-components'

const Icon1 = styled.img`
    width : 250px;
    height : 250px;
    margin: 30px;


`

const Name = styled.h1`
font-weight: 200;
    text-align:center;
    color : white;
    font-size: 100px;
`

const Name1 = styled.h2`
    text-align:center;
    color : white;
    font-size: 90px;
    font-weight: 400;

`

const BG = styled.div`
    background: url('static/img/stars.png');
    background-size: cover;
    background-repeat: no-repeat;
`

<<<<<<< HEAD

class PolarBear extends React.Component{

    render(){
        return(
        <BG>
            <Icon1 img src="static/img/bears icon.png" ></Icon1>
                <Name  className="text-center m-2">HELLO WORLD</Name>
                <Name1 className="text-center m-5">Polar Bear</Name1>
        </BG>
=======
class PolarBear extends React.Component {

    render() {
        return (
            <div>
                <BG>
                    <Icon1 img src="static/img/bears icon.png" ></Icon1>
                    <Name className="text-center">Hello World</Name>
                    <Name1 className="text-center m-5">Polar Bear</Name1>
                </BG>
            </div>
>>>>>>> 21fe784af5f9824264826e2b0fe2c4ad934b13c0
        )
    }
}
export default PolarBear;