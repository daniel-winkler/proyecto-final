import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { useHistory } from 'react-router';

export default function LogoutButton() {

    const { signOut } = useAuthContext();
    const history = useHistory();

    function handleSignOut() {
        signOut();
        history.push("/login");
    }

    return (
        <div className="logout" onClick={()=>handleSignOut()}>
            <button>Logout</button>
        </div>
    )
}
