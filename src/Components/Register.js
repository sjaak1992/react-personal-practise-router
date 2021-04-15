import React from "react";
import '../App.css';
import {useForm} from "react-hook-form";

function RegisterPage () {
    const { handleSubmit, register } = useForm();

    function onSubmitHandler (data) {
        console.log(data);
    }

    function handleClickSignUp () {
        alert("You are now registered!");
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmitHandler)} className="register-form">
                    <h2>Registreer hier</h2>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="gebruikersnaam"
                        {...register("username", { required: true })}
                    />
                    <input
                        type="email"
                        name="email-input"
                        id="email-input"
                        placeholder="e-mail"
                        {...register("email", { required: true })}
                    />
                    <input
                        type="password"
                        name="password-input"
                        id="password-input"
                        placeholder="wachtwoord"
                    />
                    <button onClick={handleClickSignUp}>registreer nu!</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;