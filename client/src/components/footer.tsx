import React, { useState } from "react";

export const Footer = (): JSX.Element => {
    const [connectIsHovered, setConnectIsHovered] = useState(false);
    const [connectIsClicked, setConnectIsClicked] = useState(false);
    const [projectsIsHovered, setProjectsIsHovered] = useState(false);
    const [projectsIsClicked, setProjectsIsClicked] = useState(false);

    const buildConnectMenu = () => {
        if (connectIsHovered || connectIsClicked) {
            return (
                <div className="position-absolute connect-menu active rounded-right">
                    <div className="d-flex justify-content-around align-items-center connect-links">
                        <a href="https://www.linkedin.com/in/jacobcodes/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Firecoded" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="mailto:contactjacobtay@gmail.com">
                            <i className="fas fa-envelope-square"></i>
                        </a>
                    </div>
                </div>
            );
        }
        return <div className="position-absolute connect-menu"></div>;
    };
    return (
        <footer className="main-nav d-flex flex-column position-absolute">
            <div
                className=" d-flex align-items-center projects-container highlight-bg cursor-pointer mb-5"
                onMouseEnter={() => setProjectsIsHovered(true)}
                onMouseLeave={() => setProjectsIsHovered(false)}
                onClick={() => setProjectsIsClicked(!projectsIsClicked)}
            >
                <span className="px-4 py-2">Projects</span>
            </div>
            <div
                className={`d-flex align-items-center justify-content-center connect-container highlight-bg cursor-pointer position-relative ${
                    connectIsHovered || connectIsClicked ? "rounded-left" : ""
                }`}
                onMouseEnter={() => setConnectIsHovered(true)}
                onMouseLeave={() => setConnectIsHovered(false)}
                onClick={() => {
                    if (connectIsClicked) {
                        setConnectIsClicked(false);
                        setConnectIsHovered(false);
                    } else {
                        setConnectIsClicked(true);
                    }
                }}
            >
                {buildConnectMenu()}
                <span className="">Connect</span>
            </div>
        </footer>
    );
};
