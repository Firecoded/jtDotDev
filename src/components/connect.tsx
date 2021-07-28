import { useState } from "react";

export const Connect = () => {
    const [connectIsHovered, setConnectIsHovered] = useState(false);
    const [connectIsClicked, setConnectIsClicked] = useState(false);

    const buildConnectMenu = () => {
        if (connectIsHovered || connectIsClicked) {
            return (
                <div className="position-absolute connect-menu active rounded-right">
                    <div className="d-flex justify-content-around align-items-center connect-links h-100">
                        <a href="https://www.linkedin.com/in/jacobcodes/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/Firecoded" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="mailto:contactjacobtay@gmail.com">
                            <i className="fas fa-envelope-square"></i>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ICDxBPl0VPGhQbfuT8IfCM01sZG1M7oB/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fas fa-file"></i>
                        </a>
                    </div>
                </div>
            );
        }
        return <div className="position-absolute connect-menu"></div>;
    };
    return (
        <div
            className={`d-flex align-items-center justify-content-center connect-container highlight-bg cursor-pointer position-relative ${
                connectIsHovered || connectIsClicked ? "active" : ""
            }`}
            tabIndex={1}
            onMouseEnter={() => setConnectIsHovered(true)}
            onMouseLeave={() => setConnectIsHovered(false)}
            onKeyUp={(e) => {
                if (e.key === "Tab") return;
                if (connectIsClicked) {
                    setConnectIsClicked(false);
                    setConnectIsHovered(false);
                } else {
                    setConnectIsClicked(true);
                }
            }}
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
    );
};
