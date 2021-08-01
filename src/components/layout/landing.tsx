import React, { useState, useEffect } from "react";

export const Landing = () => {
    const [className, setClassName] = useState("panel intro active inactive");
    useEffect(() => {
        setTimeout(() => setClassName("panel intro active"), 250);
    }, []);
    return (
        <article id="home" className={className}>
            <header>
                <h1>Jane Doe</h1>
                <p>Senior Astral Projectionist</p>
            </header>
            <a href="#work" className="jumplink pic">
                <span className="arrow icon solid fa-chevron-right">
                    <span>See my work</span>
                </span>
                <img src="images/me.jpg" alt="" />
            </a>
        </article>
    );
};
