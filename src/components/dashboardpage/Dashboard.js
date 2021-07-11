import React from 'react'
import { useEffect, useState } from 'react'
import DeleteButton from './DeleteButton';
import EditShopButton from './EditShopButton';
import LogoutButton from './LogoutButton';
import { DASHBOARD_URL } from '../../config'
import { useAuthContext } from '../../contexts/AuthContext'
import EditAccountButton from './EditAccountButton';

export default function Dashboard() {

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
        <div className="dashboard divebox">
            <h2>Welcome, {user.username} !</h2>
            <div>
                <h3>What would you like to do?</h3>
                <EditAccountButton />
                <EditShopButton />
                <DeleteButton />
                <LogoutButton />
            </div>
            
        </div>
    )
}
