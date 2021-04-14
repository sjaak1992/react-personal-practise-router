import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import Mytodo from './Mytodo';
import About from './About';
import Secret from "./Secret";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false)

    console.log("IS IT REALLY?", isAuthenticated)

    return (
        <Router>
            <div className="App">
                <Nav isAutheticated = {isAuthenticated}/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/login">
                        <Login toggleIsAuthenticated = {toggleIsAuthenticated} /> {/*de functie meegeven aan de login page */}
                    </Route>
                    <Route path="/todo" component={Mytodo}/>
                    <Route path="/secret" component={Secret}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
