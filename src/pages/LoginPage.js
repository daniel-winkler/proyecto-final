import React from 'react'
import Login from '../components/Login'
import { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useAuthContext } from '../contexts/AuthContext'

export default function LoginPage() {

    const { isAuthenticated } = useAuthContext();
    const history = useHistory();

    // al refrescar la pagina, nos comprueba si existe un token guardado en local storage y en tal caso nos redirige al dashboard
    useEffect(() => {
        isAuthenticated && history.push("/dashboard")
        // eslint-disable-next-line
    }, [isAuthenticated])

    return (
        <div>
            <Login />
        </div>
    )
}
