/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Carousel } from "../Carousel";

export const Projects = () => {
    const [className, setClassName] = useState("panel active inactive");
    useEffect(() => {
        setTimeout(() => setClassName("panel active"), 250);
    }, []);
    return (
        <article id="work" className={className}>
            <header>
                <h2>Projects</h2>
            </header>
            <section>
                <Carousel />
            </section>
        </article>
    );
};
