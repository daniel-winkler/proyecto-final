import React from 'react';
import { NavLink } from "react-router-dom";

export default function LoginButton() {
    return (
        <NavLink to="/login">
            <i className="fas fa-user fa-lg"></i>
            <span>Login</span>
        </NavLink>
    )
}
