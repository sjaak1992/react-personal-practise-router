import React from 'react';
import './App.css';
import Nav from './Nav';
import Mytodo from './Mytodo';
import About from './About';
import Secret from "./Secret";
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/todo" component={Mytodo}/>
                    <Route path="/secret" component={Secret}/>
                </Switch>
            </div>
        </Router>
    );
}


export default App;
