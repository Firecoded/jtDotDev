import React from "react";
import "./app.scss";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

const App = (): JSX.Element => {
    return (
        <div className="app position-relative">
            <Header />
            <Footer />
        </div>
    );
};

export default App;
