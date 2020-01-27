import React from 'react';
import styles from 'styled-components';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import homeSvg from '../../assets/home.svg';
import contactSvg from '../../assets/contact.svg'
import skillsSvg from '../../assets/skills.svg'
import projectsSvg from '../../assets/skills2.svg'




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
    width: ${({ show }) => show ? '100px' : '0'}
    right: 0px;
    align-items: flex-start;
    // transform: translateX(100%);
    // display:none;    
    
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

const HomeLogo = styles.img.attrs({
    src:homeSvg
})`
height:40px;
`


const SkillsLogo = styles.img.attrs({
    src:skillsSvg
})`
height:40px;
`

const ProjectsLogo = styles.img.attrs({
    src:projectsSvg
})`
height:40px;
`

const ContactLogo = styles.img.attrs({
    src:contactSvg
})`
height:40px
`


// const HomeLogo = styles.img.attrs({
//     src:homeSvg
// })``


// const HomeLogo = styles.img.attrs({
//     src:homeSvg
// })``

const Navbar = () => {


    const [showSideNav, setShowSideNav] = useState(false);

    return (

        <NavBar>
            <Logo to="/">AD</Logo>

            <NavLinks show={ showSideNav }>

                <NavLink to="/" onClick={()=>setShowSideNav(!showSideNav)}><HomeLogo/></NavLink>
                <NavLink to="/skills" onClick={()=>setShowSideNav(!showSideNav)}><SkillsLogo/></NavLink>
                <NavLink to="/projects" onClick={()=>setShowSideNav(!showSideNav)}><ProjectsLogo/></NavLink>
                <NavLink to="/contact" onClick={()=>setShowSideNav(!showSideNav)}><ContactLogo/></NavLink>
                <NavLink to="/login" onClick={()=>setShowSideNav(!showSideNav)}>Login</NavLink>

            </NavLinks>

            <MenuIcon onClick={()=>setShowSideNav(!showSideNav)}> 
                <Line></Line>
                <Line></Line>
                <Line></Line>
            </MenuIcon>
        </NavBar>


    )


}

export default Navbar;