import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import me from "../../assets/imgs/IMG_4390_compressed.jpg";

export const Landing = () => {
    const [email, setEmail] = useState("");
    useEffect(() => {
        const t = setTimeout(() => setEmail("contactjacobtay@gmail.com"), 1000);
        return () => clearTimeout(t);
    }, []);
    return (
        <article id="home" className="panel intro">
            <header>
                <h1>Jacob Taylor</h1>
                <p>Full Stack, UI/UX Advocate, Software Engineer</p>
                <div className="connect-links">
                    <a href="https://www.linkedin.com/in/jacobcodes/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Firecoded" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={`mailto:${email}`} aria-label="Email">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </header>
            <Link to="/code" className="jumplink pic">
                <span className="arrow">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="sr-only">See my work</span>
                </span>
                <img src={me} alt="Jacob Taylor, Vietnam background" />
            </Link>
        </article>
    );
};
