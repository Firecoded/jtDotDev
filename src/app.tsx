import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles/fontawesome-all.min.css";
import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Landing } from "./components/layout/landing";
import { Projects } from "./components/layout/projects";
import { Nav } from "./components/layout/nav";

const FADE_OUT_MS = 180;

const TITLES: Record<string, string> = {
    "/": "Jacob Taylor",
    "/code": "Code Projects | Jacob Taylor",
};

const Panels = () => {
    const location = useLocation();
    const [shown, setShown] = useState(location);
    const [leaving, setLeaving] = useState(false);
    const mainRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.pathname === shown.pathname) return;
        setLeaving(true);
        const t = setTimeout(() => {
            setShown(location);
            setLeaving(false);
        }, FADE_OUT_MS);
        return () => clearTimeout(t);
    }, [location, shown.pathname]);

    useEffect(() => {
        document.title = TITLES[shown.pathname] ?? TITLES["/"];
    }, [shown.pathname]);

    // #main animates between explicit pixel heights so the card grows and shrinks instead of jumping.
    useLayoutEffect(() => {
        const main = mainRef.current;
        const inner = innerRef.current;
        if (!main || !inner) return;
        const observer = new ResizeObserver(() => {
            main.style.height = `${inner.offsetHeight}px`;
        });
        observer.observe(inner);
        return () => observer.disconnect();
    }, []);

    return (
        <div id="main" ref={mainRef}>
            <div ref={innerRef} className={leaving ? "is-leaving" : undefined}>
                <Routes location={shown}>
                    <Route path="/" element={<Landing />} />
                    <Route path="/code" element={<Projects />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </div>
    );
};

const App = (): JSX.Element => {
    useEffect(() => {
        requestAnimationFrame(() => document.body.classList.remove("is-preload"));
    }, []);
    return (
        <div id="wrapper">
            <Router>
                <Nav />
                <Panels />
            </Router>
        </div>
    );
};

export default App;
