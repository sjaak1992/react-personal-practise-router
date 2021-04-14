import React, {useState, createContext, useContext} from "react";



export const LoginContext = createContext(); // dit is een functie


export const LoginProvider = (props) => {

    const [isAuthenticated, toggleIsAuthenticated] = useState(false)

    return (
        // vaak is het een {object} ipv een [], handig wanneer hier veel data in staat omdat je het een naam kan geven
        <LoginContext.Provider value={[isAuthenticated, toggleIsAuthenticated]}>

            {props.children}

        </LoginContext.Provider>
    );
}


// Maak een eigen Hook waarin de login en useContext al inzitten, te herbruiken in children
export const useLogin = () => {
    return useContext(LoginContext)
}

