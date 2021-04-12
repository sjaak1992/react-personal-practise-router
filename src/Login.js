import React, {useState} from 'react';
import {useHistory} from "react-router";
import './App.css';



function Login() {

const [isAuthenticated, toggleIsAuthenticated] = useState(false)
    const history = useHistory();


    return (
        <div className="login-page">
            <h1>Login</h1>
            <p> Log in to see your secret page 😶 </p>
            <button>
                Hier Inloggen!
            </button>
        </div>
    );
}

export default Login;
