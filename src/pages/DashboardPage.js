import React from 'react'
import { useEffect } from 'react'
import DeleteButton from '../components/dashboardpage/DeleteButton';
import LogoutButton from '../components/dashboardpage/LogoutButton';
import { DASHBOARD_URL } from '../config'
import { useAuthContext } from '../contexts/AuthContext'

export default function DashboardPage() {

    const { getToken } = useAuthContext(); //TODO: isAuthorized?

    const options = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    }

    useEffect(() => {
        fetch(DASHBOARD_URL, options)
        .then(r => r.json())
        .then(data => console.log(data))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="dashboardpage divebox">
            <LogoutButton />
            <DeleteButton />
            
        </div>
    )
}
