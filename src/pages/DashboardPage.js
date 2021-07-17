import React from 'react'
import { Route, Redirect } from 'react-router';
import Dashboard from '../components/dashboardpage/Dashboard';
import { useAuthContext } from '../contexts/AuthContext'

export default function DashboardPage() {

    const { isAuthenticated } = useAuthContext();

    return (
        <Route render={() => {
            return isAuthenticated 
                ?
                <div className="dashboardpage d-flex">
                    <Dashboard />
                </div>
                : <Redirect exact to="/login" />
    }} />
    )
}
