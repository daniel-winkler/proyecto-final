import { createContext, useState, useContext, useEffect } from "react";
import { CHECK_TOKEN_URL } from "../config";

const LoginContext = createContext(null);

export default function AuthContext({children}) {

    // const [loginUser, setLoginUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const signIn = (token) => {

        setToken(token);
        // setLoginUser(user);
        setIsAuthenticated(true);
    }

    const signOut = () => {
     
        removeToken();
        // setLoginUser({});
        setIsAuthenticated(false);
    }

    const getAuthHeaders = (headers = {}) => {
        // le damos a headers un valor por defecto {} para evitar que devuelva undefined
        return {...headers, Authorization: `Bearer ${getToken()}`}
    };

    useEffect(() => {
        // Recuperar la sesión y comprobar su validez
        const options = {
            headers: getAuthHeaders()
        };

        // si no hay token guardado, no hacemos la petición
        getToken() && fetch(CHECK_TOKEN_URL, options) 
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => signIn(getToken())) // Token renovado
            .catch(() => signOut()); // Limpiamos la sesión

        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

    const contextValue = {
        // loginUser,
        isAuthenticated,
        getToken,
        signIn,
        signOut,
        getAuthHeaders
    };

    /**
     * Envuelve a todos los hijos con el Provider del contexto, enviando 
     * por value un objeto con todas las propiedades / funciones
     * que se quieran exponer en el árbol.
     */

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

/**
 * En lugar de exportar el contexto, podemos exportar un pequeño custom hook
 * que utiliza directamente el contexto LoginContext para simplificar el uso
 * en el resto de archivos. Es muy común aunque es opcional.
 */
const useAuthContext = () => useContext(LoginContext);

export { useAuthContext };