import React from 'react'
import { NavLink } from "react-router-dom";

export default function DashboardButton() {
    return (
        <div>
            <NavLink to="/dashboard" activeClassName="active">
                <i className="fas fa-user fa-lg"></i>
                <span>Dashboard</span>
            </NavLink>
        </div>
    )
}
