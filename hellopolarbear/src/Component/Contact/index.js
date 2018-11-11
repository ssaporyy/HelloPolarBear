import React from 'react'
import styled from 'styled-components'

const Face = styled.img`
    width: ;
    height: ;

`

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

class Contact extends React.Component{

    render(){
        return(
            <div>
                <h1>Contact</h1>
                <NavBar className="nav nav-pills nav-fill ">
                
                <Link className="nav-item" >
                    
                </Link>
                <Link className="nav-item" >
                   
                </Link>
                <Link className="nav-item " >
                   
                </Link>
                <Link className="nav-item " >
                    
                </Link>
            </NavBar>
                
            </div>
        )
    }
}
export default Contact;