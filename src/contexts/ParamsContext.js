import { createContext, useState, useContext } from "react";

const ContextProvider = createContext(null);

export default function ParamsContext({children}) {

    const [input, setInput] = useState("")
    const [page, setPage] = useState("")
    const [destination, setDestination] = useState("")
    const [language, setLanguage] = useState("")

    
    const contextValue = {
        input,
        setInput,
        page,
        setPage,
        destination,
        setDestination,
        language,
        setLanguage
    };


    return (
        <ContextProvider.Provider value={contextValue}>
            {children}
        </ContextProvider.Provider>
    );
}
const useParamsContext = () => useContext(ContextProvider);

export { useParamsContext };