import './App.css';
import Nav from './Components/Nav';
import ToDo from './Components/Mytodo';
import About from './Components/About';
import Secret from "./Components/Secret";
import Login from "./Components/Login";
import { LoginProvider } from "./LoginContext";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
    // const [isAuthenticated, toggleIsAuthenticated] = useState(false)
    // console.log("IS IT REALLY?", isAuthenticated)

    return (

        <Router>
            <LoginProvider>
            <div className="App">
                {/*<Nav isAutheticated = {isAuthenticated}/>*/}
                <Nav/>
                <Switch>

                    <Route path="/about">
                        <About/>
                    </Route>

                    <Route path="/login">
                        {/*<Login toggleIsAuthenticated = {toggleIsAuthenticated} /> /!*de functie meegeven aan de login page *!/*/}
                    <Login/>
                    </Route>

                    <Route path="/todo">
                        <ToDo />
                    </Route>

                    <Route path="/secret">
                        <Secret/>
                    </Route>

                </Switch>
            </div>
        </LoginProvider>
        </Router>

    );
}


export default App;
