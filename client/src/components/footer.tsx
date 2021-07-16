import React from "react";

export const Footer = (): JSX.Element => {
    const navItems = [
        {
            title: "Connect",
        },
        {
            title: "Projects",
        },
    ];
    const buildNav = () => {
        return navItems.map((n) => {
            return (
                <span key={n.title} className="mr-4">
                    {n.title}
                </span>
            );
        });
    };
    return <footer className="main-nav d-flex position-absolute">{buildNav()}</footer>;
};
