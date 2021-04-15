import './App.css';
import Nav from './Components/Nav';
import ToDo from './Components/Mytodo';
import About from './Components/About';
import Secret from "./Components/Secret";
import Login from "./Components/Login";
import {useLogin} from "./LoginContext";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Redirect} from "react-router";
import RegisterPage from "./Components/Register";
import Home from "./Components/Home";


function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useLogin();
    // console.log("IS IT REALLY?", isAuthenticated)

    return (


        <div className="App">
            {/*<Nav isAutheticated = {isAuthenticated}/>*/}
            <Nav/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/register">
                    <RegisterPage/>
                </Route>

                <Route path="/login">
                    {/*<Login toggleIsAuthenticated = {toggleIsAuthenticated} /> /!*de functie meegeven aan de login page *!/*/}
                    <Login/>
                </Route>

                <Route path="/todo">
                    <ToDo/>
                </Route>

                <Route path="/secret">
                    {isAuthenticated ? <Secret/> : <Redirect to={"/login"}/>}
                </Route>

            </Switch>
        </div>

    );
}


export default App;
