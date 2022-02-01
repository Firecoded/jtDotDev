import { Link, RouterProps, withRouter } from "react-router-dom";

export const Nav = withRouter((routerProps: RouterProps) => {
    const { pathname } = routerProps.history.location;
    return (
        <nav id="nav">
            <Link to="/" className={`icon solid fa-home inactive ${pathname === "/" ? "active" : "is-preload"}`}>
                <span className="hover-span">Home</span>
            </Link>
            <Link
                to="/code"
                className={`icon solid fa-code inactive ${pathname === "/code" ? "active" : "is-preload"}`}
            >
                <span className="hover-span">Code</span>
            </Link>
            <Link
                to="/video"
                className={`icon solid fa-film inactive ${pathname === "/video" ? "active" : "is-preload"}`}
            >
                <span className="hover-span">Video</span>
            </Link>
            <Link
                to="/audio"
                className={`icon solid fa-headphones-alt inactive ${pathname === "/audio" ? "active" : "is-preload"}`}
            >
                <span className="hover-span">Audio</span>
            </Link>
            <a
                href="https://drive.google.com/file/d/1xXYtMqASoTwTPvSC_WqnfuC0lSJLqcQD/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="icon solid fa fa-user-astronaut inactive"
            >
                <span className="hover-span">Resume</span>
            </a>
        </nav>
    );
});
