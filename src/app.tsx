import React, { useEffect } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./components/layout/landing";
import { Projects } from "./components/layout/projects";
import { Contact } from "./components/layout/contact";
import { Nav } from "./components/layout/nav";

const App = (): JSX.Element => {
    useEffect(() => {
        document.body.classList.remove("is-preload");
    }, []);
    return (
        <div id="wrapper">
            <Router>
                <Nav />
                <div id="main">
                    <Switch>
                        <Route exact path="/" render={() => <Landing />} />
                        <Route path="/projects" render={() => <Projects />} />
                        <Route path="/contact" render={() => <Contact />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
