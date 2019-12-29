import React from 'react';
import styles from 'styled-components';
import { Link } from 'react-router-dom';


const NavBar = styles.div`
display: flex;
justify-content: space-around;
align-items: center;
min-height: 8vh;
margin-left:50px;
margin-right:50px;

`

const NavLinks = styles.ul`
display : flex;
flex:1;
justify-content: space-around;
flex-basis: 30%;
@media (max-width: 768px) {
    display : flex;
    flex:1;
    justify-content: space-around;
    flex-direction: column;
    position: absolute;
    height:50vh;
    top: 8vh;
    right: 0px;
    
    align-items: flex-start;
    // transform: translateX(100%);
    display:none;
  }
`
const NavLink = styles(Link)`
color: #ffffff;
text-decoration: none;
font-size: 20px;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;

    
}
`

const Logo = styles(Link)`
flex:1;
color: ${(props)=>props.theme.ternarycolor};
font-size: 30px;
font-weight: bold;
text-decoration: none;
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`

const Line = styles.div`
min-width:25px;
min-height:3px;
background-color: #ffffff;
margin :2px;
`

const MenuIcon = styles.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
display:none;

@media (max-width: 768px) {
    display:block;
    max-width:20px;
    max-height 10px;
    
  }
`

const Navbar = () => {

    return (

        <NavBar>
            <Logo to="/">AD</Logo>

            <NavLinks>

                <NavLink to="/">Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login">Login</NavLink>

            </NavLinks>

            <MenuIcon>
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </MenuIcon>
        </NavBar>


    )


}

export default Navbar;