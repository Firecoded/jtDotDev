import { useEffect } from "react";
import "./styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./components/layout/landing";
import { Projects } from "./components/layout/projects";
import { Video } from "./components/layout/video";
import { Audio } from "./components/layout/audio";
import { Nav } from "./components/layout/nav";

const App = (): JSX.Element => {
    useEffect(() => {
        document.body.classList.remove("is-preload");
    }, []);
    return (
        <div id="wrapper">
            <Router>
                <Nav />
                <div id="main" className="shadow">
                    <Switch>
                        <Route exact path="/" render={() => <Landing />} />
                        <Route path="/code" render={() => <Projects />} />
                        <Route path="/video" render={() => <Video />} />
                        <Route path="/audio" render={() => <Audio />} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
