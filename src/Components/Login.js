import React from 'react';
import '../App.css';
import {useLogin} from "../LoginContext";
import {useForm} from "react-hook-form";


function Login() {
    //Rein
    // console.log(props.toggleIsAuthenticated)
    // functie is in de app meegegeven, en kan hier worden gebruikt met props, callback props waarmee je de state in parent component aanpast van false naar true

    const [, toggleIsAuthenticated] = useLogin();
    // ervoor een komma want isAuthenticated word niet gebruikt, maar omdat het een array is moet er wel aangegeven worden welke index
    // const [,toggleIsAuthenticated] = useContext(LoginContext)
    // wanneer value een object is, hier ook een object doorgeven

    //Huiswerk (create inlogpage)

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmitHandler(data) {
        console.log(data);
    }

    return (
        <div className="login-page">
            <form onSubmit={handleSubmit(onSubmitHandler)} className="login-form"/>
            <h1>Login</h1>
            <p> Log in to see your secret page 😶 </p>
            <label htmlFor="username">username:</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="gebruikersnaam"
                {...register("username", { required: true })}

            />
            <label htmlFor="password">password:</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="wachtwoord"
                {...register("password", { required: true })}

            />

            <button
                type="submit"
                id="login-button"
                onClick={() => toggleIsAuthenticated(true)}> Hier Inloggen!
            </button>
        </div>
    );
}

export default Login;
