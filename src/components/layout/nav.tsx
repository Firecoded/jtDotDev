import { Link, RouterProps, withRouter } from "react-router-dom";

export const Nav = withRouter((routerProps: RouterProps) => {
    const { pathname } = routerProps.history.location;
    return (
        <nav id="nav">
            <Link to="/" className={`icon solid fa-home inactive ${pathname === "/" ? "active" : "is-preload"}`}>
                <span>Home</span>
            </Link>
            <Link
                to="/projects"
                className={`icon solid fa-folder inactive ${pathname === "/projects" ? "active" : "is-preload"}`}
            >
                <span>Projects</span>
            </Link>
            <Link
                to="/contact"
                className={`icon solid fa-envelope inactive ${pathname === "/contact" ? "active" : "is-preload"}`}
            >
                <span>Contact</span>
            </Link>
        </nav>
    );
});
