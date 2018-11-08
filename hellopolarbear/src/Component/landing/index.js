import React from 'react'
import styled from 'styled-components'

const NavBar = styled.nav`
    background-color: #93e8fa ;
`

const Link = styled.a`
    color: #fff;
    font-size: 20px;
    margin: 10px;
    &:hover{
        color:#fff;
        text-decoration:none;
    }
`


class Landing extends React.Component {

    render() {
        return (
            <NavBar class="nav nav-pills nav-fill">
                <Link class="nav-item nav-link" href="#">
                    Home
                </Link>
                <Link class="nav-item nav-link" href="#">
                    What
                </Link>
                <Link class="nav-item nav-link" href="#">
                    Who
                </Link>
                <Link class="nav-item nav-link" href="#">
                    When
                </Link>
                <Link class="nav-item nav-link" href="#">
                    Contact
                </Link>
            </NavBar>
        )
    }
}
export default Landing;

