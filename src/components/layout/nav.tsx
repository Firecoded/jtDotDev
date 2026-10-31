import { useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const LINKS = [
    { to: "/", label: "Home", icon: "fa-home" },
    { to: "/code", label: "Code", icon: "fa-code" },
];

const RESUME_URL = "https://drive.google.com/file/d/1fFCbmhwoiXE93Sy2M4Hf7OgRVXcmadB9/view?usp=sharing";

export const Nav = () => {
    const { pathname } = useLocation();
    const navRef = useRef<HTMLElement>(null);
    const [pointerX, setPointerX] = useState<number | null>(null);

    // One pointer slides under the active link rather than each link drawing its own.
    useLayoutEffect(() => {
        const place = () => {
            const active = navRef.current?.querySelector<HTMLElement>("a.active");
            setPointerX(active ? active.offsetLeft + active.offsetWidth / 2 : null);
        };
        place();
        window.addEventListener("resize", place);
        return () => window.removeEventListener("resize", place);
    }, [pathname]);

    return (
        <nav id="nav" ref={navRef}>
            {LINKS.map(({ to, label, icon }) => (
                <Link key={to} to={to} className={pathname === to ? "active" : undefined}>
                    <i className={`fas ${icon}`} aria-hidden="true"></i>
                    <span className="nav-label">{label}</span>
                </Link>
            ))}
            <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <svg className="nav-svg" viewBox="0 0 24 24" aria-hidden="true">
                    <mask id="resume-icon-cutout">
                        <rect width="24" height="24" fill="#fff" />
                        <path
                            d="M8.5 17.5L15 11M10.6 11H15v4.4"
                            fill="none"
                            stroke="#000"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M14 2v4.5a1.5 1.5 0 0 0 1.5 1.5H20" fill="none" stroke="#000" strokeWidth="1.4" />
                    </mask>
                    <path
                        d="M6 2h8l6 6v12.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
                        fill="currentColor"
                        mask="url(#resume-icon-cutout)"
                    />
                </svg>
                <span className="nav-label">
                    Resume<span className="sr-only"> (opens in a new tab)</span>
                </span>
            </a>
            <span
                className="nav-pointer"
                style={{ opacity: pointerX === null ? 0 : 1, transform: `translateX(${pointerX ?? 0}px)` }}
            />
        </nav>
    );
};
