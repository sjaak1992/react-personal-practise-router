// import React, {useState} from "react";
import '../App.css';
import {useForm} from "react-hook-form";
// import axios from "axios";


function RegisterPage () {
    // const [registerSucces, toggleRegister] = useState(false);
    const { handleSubmit, register } = useForm();



    // les novi: nep server en jwt token
    async function onSubmitHandler (data) {
        console.log(data);
//        try {
//     const result = await axios.post (" http://localhost:3000/register", {
//         username: data.username,
//         password: data.password
//     })
//
//       toggleRegister(true);
//        } catch(e)
// {
//     console.error(e)

}

    function handleClickSignUp (data) {
        console.log(data)
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
                        name="email"
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
                    {/*{registerSucces === true && <p> Registreren is gelukt, wooohooo</p>}*/}

                </form>
            </div>
        </div>
    )
}

export default RegisterPage;