import React from 'react'
import styled from 'styled-components'

const Icon1 = styled.img`
    width : 250px;
    height : 250px;
    margin: 50px;


`

const Name = styled.h1`
    //font-family: 'Shadows Into Light', cursive;
    font-family: 'Permanent Marker', cursive;
    text-align:center;
    color : white;
    font-size: 90px;
`

const Name1 = styled.h2`
    font-family: 'Kalam', cursive;
    text-align:center;
    color : white;
    font-size: 90px;
`

const BG = styled.div`
    background: url('static/img/stars.png');
    background-size: 1200px;

`


class PolarBear extends React.Component{

    render(){
        return(
        <BG>
            <Icon1 img src="static/img/bears icon.png" ></Icon1>
                <Name  className="text-center">Hello World</Name>
                <Name1 className="text-center m-5">Polar Bear</Name1>
        </BG>
        )
    }
}
export default PolarBear;