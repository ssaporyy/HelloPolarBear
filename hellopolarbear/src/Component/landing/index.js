import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
    background-color: #93e8fa ;
    background-attachment: ;
`

const Link = styled.a`
    color: #fff;
    font-size: 25px;
    margin: 10px;
    &:hover{
        color:#000;
        text-decoration:none;
    }
`
const Icon = styled.img`
    width : 50px;
    height : 50px;
    margin: 10px;


`


class Landing extends React.Component {

    render() {
        return (
            <NavBar className="nav nav-pills nav-fill sticky-top">
                <Icon img src="static/img/bears icon.png"></Icon>
                <Link className="nav-item nav-link" href="#home">
                    Home
                </Link>
                <Link className="nav-item nav-link" href="#what">
                    What
                </Link>
                <Link className="nav-item nav-link" href="#who">
                    Who
                </Link>
                <Link className="nav-item nav-link" href="#contact">
                    Contact
                </Link>
            </NavBar>
        )
    }
}
export default Landing;

