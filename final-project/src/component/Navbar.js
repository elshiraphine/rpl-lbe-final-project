import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div class="navpanel">
            <header class="navbar">
                <div className="height-prop">
                    <img className="logo" src={logo} alt="Logo" />
                </div>
                <nav>
                    <ul class="navlinks">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alert">Alert</Link></li>
                        <li><Link to="/learn">learn</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
