import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import hamburger from "../assets/menu2.png"

export default function Navbar() {
    function show() {
        
    }
    
    return (
            <nav className='navbar'>
                <NavLink to="/" id='home'>Home</NavLink>
                <div className='linki'>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/files">Files</NavLink>
                </div>
                <div className='HamburgerPhoneDiv'>
                <button className='przyciskburger'>
                <a href="/about">
                    <img src={hamburger} className="hamburger"></img></a>
                    </button>
                </div>
            </nav>

    )
}