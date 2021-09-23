import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <div class="navpanel">
            <header class="navbar">
                <img src={logo} alt="Logo" />
                <nav>
                    <ul class="navlinks">
                        <li><a href="#">Alert</a></li>
                        <li><a href="#">Learn</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
