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
    margin: 50px;
    marginTop: 20px;

`

class PolarBear extends React.Component{

    render(){
        return(
        <div>
            <Icon1 img src="static/img/bears icon.png" ></Icon1>
                <Name h1 className="text-center">Hello World</Name>
                <Name1 h2>Polar Bear</Name1>
        </div>
        )
    }
}
export default PolarBear;