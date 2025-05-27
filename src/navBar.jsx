import React from 'react';
import Home from './home';
import About from './about';
import { NavLink } from 'react-router-dom';
import './navBar.css';
function NavBar(){
    return(
        <>
        <ul>
            <li>
             <NavLink to= '/'className={({ isActive }) => isActive ? "active-Link" : "deactive"} >Home</NavLink>
                 </li>
           

            <li>
                <NavLink to='/about' className={({ isActive }) => isActive ? "active-Link" : "deactive"} >About</NavLink>
            </li>
        </ul>
        </>
    )
}
export default  NavBar;