import React from "react";

export const Header = (): JSX.Element => {
    return (
        <h1 className="main-header d-flex flex-column">
            <span>
                Jacob Taylor<span className="highlight-text">,</span>
            </span>
            <span>
                Full Stack<span className="highlight-text">,</span>
            </span>
            <span>
                UI<span className="highlight-text">/</span> UX Advocate<span className="highlight-text">,</span>
            </span>
            <span>
                Software Engineer<span className="highlight-text">.</span>
            </span>
        </h1>
    );
};
