import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
    background-color: ;
    color: #fff; 
`


class Landing extends React.Component {

    render() {
        return (
            <div>
                <NavBar class="nav nav-pills nav-fill">
                    <a class="nav-item nav-link" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">What</a>
                    <a class="nav-item nav-link" href="#">Who</a>
                    <a class="nav-item nav-link" href="#">When</a>
                    <a class="nav-item nav-link" href="#">Contact</a>
                </NavBar>
            </div>
        )
    }
}
export default Landing;

