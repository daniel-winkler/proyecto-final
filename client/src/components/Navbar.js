import { NavLink } from "react-router-dom";
import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                    <div className="hamburger">
                        <i className="fas fa-bars fa-lg"></i>
                    </div>
                    <div className="navlinks">
                        <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                        <NavLink to="/destinations" activeClassName="active">Destinations</NavLink>
                        <NavLink to="/divetypes" activeClassName="active">Dive Types</NavLink>
                        <NavLink to="/diveshops" activeClassName="active">Dive Shops</NavLink>
                    </div>
                    <div className="navlogin">
                        <NavLink to="/login">
                            <i className="fas fa-user fa-lg"></i>
                            <span>Login / Register</span>
                        </NavLink>
                    </div>
                </nav>
        </div>
    )
}
