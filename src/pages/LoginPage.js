import React from 'react'
import Login from '../components/Login'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuthContext } from '../contexts/AuthContext'

export default function LoginPage() {

    const { isAuthenticated } = useAuthContext();
    const history = useHistory();

    useEffect(() => {
        isAuthenticated && history.push("/dashboard")
    }, [isAuthenticated])

    return (
        <div>
            <Login />
        </div>
    )
}
