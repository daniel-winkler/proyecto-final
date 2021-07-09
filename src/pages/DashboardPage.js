import React from 'react'
import { useEffect } from 'react'
import { DASHBOARD_URL } from '../config'
import { useAuthContext } from '../contexts/AuthContext'

export default function DashboardPage() {

    const { getToken } = useAuthContext();

    const options = {
        headers: {"Authorization": `Bearer ${getToken()}`}
    }

    useEffect(() => {
        fetch(DASHBOARD_URL, options)
        .then(r => r.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            
        </div>
    )
}
