import React, {useState} from 'react';

import './App.css';



function Login(props) {
    console.log(props.toggleIsAuthenticated)
// functie is in de app meegegeven, en kan hier worden gebruikt als props, callback props waarmee je de state in parent component aanpast

    return (
        <div className="login-page">
            <h1>Login</h1>
            <p> Log in to see your secret page 😶 </p>
            <button
                type="login"
                id="login-button"
                onClick={() => props.toggleIsAuthenticated(true)}> Hier Inloggen!
            </button>
        </div>
    );
}

export default Login;
