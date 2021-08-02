import { useState, useEffect } from "react";

export const Audio = () => {
    const [className, setClassName] = useState("panel active inactive");
    useEffect(() => {
        setTimeout(() => setClassName("panel active"), 250);
    }, []);
    return (
        <article id="contact" className={className}>
            <header>
                <h2>Audio Projects</h2>
            </header>
            {/* <h4>Up the Pacific Coast</h4> */}
            <p className="mb-2">This section is in progress, check back soon</p>
        </article>
    );
};
