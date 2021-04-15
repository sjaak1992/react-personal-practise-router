import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { useLogin } from "../LoginContext";

function Nav() {
    const [isAuthenticated, ] = useLogin()
    // const [,toggleIsAuthenticated] = useContext(LoginContext)

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to ='/login' className='text-link'>
                    <li>Login</li>
                </Link>

                <Link to ='/' className='text-link'>
                    <li> Home </li>
                </Link>

                <Link to ='/register' className='text-link'>
                    <li> Register </li>
                </Link>


                <Link to='/about' className='text-link'>
                    <li> About</li>
                </Link>
                <Link to ='/todo' className='text-link'>
                    <li> My to do list</li>
                </Link>


                {isAuthenticated === true &&
                <Link to='/secret' className='text-link'>
                    <li> Secret page</li>
                </Link>
                }


            </ul>
        </nav>
    );
}

export default Nav;
