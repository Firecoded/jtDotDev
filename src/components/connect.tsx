import { useState } from "react";

export const Connect = () => {
    const [connectIsHovered, setConnectIsHovered] = useState(false);
    const [connectIsClicked, setConnectIsClicked] = useState(false);

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
        <div
            className={`d-flex align-items-center justify-content-center connect-container highlight-bg cursor-pointer position-relative ${
                connectIsHovered || connectIsClicked ? "active" : ""
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
    );
};
