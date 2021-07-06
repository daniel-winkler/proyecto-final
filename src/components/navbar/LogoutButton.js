import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'

export default function LogoutButton() {

    const { signOut } = useAuthContext();

    return (
        <div className="logout" onClick={()=>signOut()}>
            <i className="fas fa-user fa-lg"></i>
            <span>Logout</span>
        </div>
    )
}
