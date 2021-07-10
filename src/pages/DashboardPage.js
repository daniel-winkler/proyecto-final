import React from 'react'
import { useEffect, useState } from 'react'
import DeleteButton from '../components/dashboardpage/DeleteButton';
import LogoutButton from '../components/dashboardpage/LogoutButton';
import { DASHBOARD_URL } from '../config'
import { useAuthContext } from '../contexts/AuthContext'

export default function DashboardPage() {

    const { getToken } = useAuthContext(); //TODO: isAuthorized?

    const [ user, setUser ] = useState({})

    const options = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    }

    useEffect(() => {
        fetch(DASHBOARD_URL, options)
        .then(r => r.json())
        .then(data => setUser(data))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="dashboardpage divebox">
            <h2>Welcome, {user.username} !</h2>
            <LogoutButton />
            <DeleteButton />
            
        </div>
    )
}
