import React from 'react';
import '../App.css';
import { useLogin } from "../LoginContext";


function Login() {
    // console.log(props.toggleIsAuthenticated)
// functie is in de app meegegeven, en kan hier worden gebruikt met props, callback props waarmee je de state in parent component aanpast van false naar true

    const [,toggleIsAuthenticated] = useLogin() // ervoor een komma want isAuthenticated word niet gebruikt, maar omdat het een array is moet er wel aangegeven worden welke index
    // const [,toggleIsAuthenticated] = useContext(LoginContext)


    return (
        <div className="login-page">
            <h1>Login</h1>
            <p> Log in to see your secret page 😶 </p>
            <button
                type="login"
                id="login-button"
                onClick={() => toggleIsAuthenticated(true)}> Hier Inloggen!
            </button>
        </div>
    );
}

export default Login;
