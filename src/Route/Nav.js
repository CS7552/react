import React from 'react';
import { NavLink } from 'react-router-dom'
const Nav = (props) => {
    const NavLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none'
        }
    }
    return (
        <nav>
            <NavLink style={NavLinkStyle} to='/' >Home</NavLink>
            <NavLink style={NavLinkStyle} to='/about'>About</NavLink>
            <NavLink style={NavLinkStyle} to='/products'>Products</NavLink>
            <NavLink style={NavLinkStyle} to='/loading'>Loading</NavLink>
        </nav>
    );
}

export default Nav;