import React from 'react'
import { useEffect, useState } from 'react'
import DeleteButton from './DeleteButton';
import EditShop from './EditShop';
import LogoutButton from './LogoutButton';
import { DASHBOARD_URL } from '../../config'
import { useAuthContext } from '../../contexts/AuthContext'
import EditAccount from './EditAccount';
import Collapsible from "react-collapsible"; // https://www.npmjs.com/package/react-collapsible

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

    console.log(user);

    return (
        <div className="dashboard divebox">
            <h2>Welcome, {user.username} !</h2>
            <div>
                <h3>What would you like to do?</h3>
                <Collapsible trigger="Edit your account" triggerTagName="button">
                    <EditAccount/>
                </Collapsible>
                <Collapsible trigger="Edit your shop" triggerTagName="button">
                    <EditShop shop={user.shop}/>
                </Collapsible>
                <DeleteButton />
                <LogoutButton />
            </div>
            
        </div>
    )
}
