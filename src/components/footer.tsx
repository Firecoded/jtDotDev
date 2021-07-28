import React, { Fragment, useState } from "react";
import { Connect } from "./connect";
import { Projects } from "./projects";

export const Footer = (): JSX.Element => {
    const [projectsIsClicked, setProjectsIsClicked] = useState(false);

    const buildProjectsMenu = () => {
        if (projectsIsClicked) {
            return (
                <div className="position-absolute projects-menu active rounded-right d-flex justify-content-center align-items-center">
                    <div className="projects-content-container position-relative h-100 w-100">
                        <button
                            type="button"
                            className="close position-absolute"
                            aria-label="Close"
                            onClick={() => setProjectsIsClicked(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <Projects />
                    </div>
                </div>
            );
        }
        return <div className="position-absolute projects-menu  rounded-right"></div>;
    };

    return (
        <Fragment>
            {buildProjectsMenu()}
            <footer className="main-nav d-flex flex-column position-absolute">
                <div
                    className=" d-flex align-items-center justify-content-center projects-container highlight-bg cursor-pointer"
                    onClick={() => setProjectsIsClicked(!projectsIsClicked)}
                    onKeyUp={(e) => {
                        if (e.key === "Tab") return;
                        setProjectsIsClicked(!projectsIsClicked);
                    }}
                    role="button"
                    tabIndex={0}
                >
                    <span className="px-4 py-2">{`${projectsIsClicked ? "Close" : "Projects"}`}</span>
                </div>
                <div className="highlight-border-left"></div>
                <Connect />
            </footer>
        </Fragment>
    );
};
