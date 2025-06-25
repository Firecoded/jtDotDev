import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import me from "../../assets/imgs/IMG_4390_compressed.jpg";

export const Landing = () => {
    const [className, setClassName] = useState("panel intro active inactive");
    const [email, setEmail] = useState("");
    useEffect(() => {
        setTimeout(() => setClassName("panel intro active"), 250);
        setTimeout(() => setEmail("contactjacobtay@gmail.com"), 1000);
    }, []);
    return (
        <article id="home" className={className}>
            <header>
                <h1>Jacob Taylor</h1>
                <p>Full Stack, UI/UX Advocate, Software Engineer</p>
                <div className="connect-links w-100 mt-4">
                    <a href="https://www.linkedin.com/in/jacobcodes/" target="_blank" rel="noreferrer" className="pr-3">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/Firecoded" target="_blank" rel="noreferrer" className="pr-3">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={`mailto:${email}`}>
                        <i className="fas fa-envelope-square"></i>
                    </a>
                </div>
            </header>
            <Link to="/code" className="jumplink pic">
                <span className="arrow icon solid fa-chevron-right">
                    <span>See my work</span>
                </span>
                <img src={me} alt="Jacob Taylor, Vietnam background" />
            </Link>
        </article>
    );
};
