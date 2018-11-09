import React from 'react'
import styled from 'styled-components'

const Icon1 = styled.img`
    width : 250px;
    height : 250px;
    margin: 50px;


`

class PolarBear extends React.Component{

    render(){
        return(
        <div>
            <Icon1 img src="static/img/bears icon.png" ></Icon1>
                <h1 className="text-center">Hello World</h1>
                <h1>Polar Bear</h1>
        </div>
        )
    }
}
export default PolarBear;