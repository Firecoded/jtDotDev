import kits from "../../assets/imgs/kits-clip.webp";
import kitsStill from "../../assets/imgs/kits-clip-still.webp";
import searchbarStudio from "../../assets/imgs/searchbarstudio.webp";
import jacobShoots from "../../assets/imgs/jacobshoots.webp";
import videoResizer from "../../assets/imgs/video-resizer.webp";
import minesweeper from "../../assets/imgs/minesweeper.webp";

type Project = {
    title: string;
    img: string;
    imgStill?: string;
    imgAlt: string;
    caption?: string;
    body: string;
    tech: string[];
    url: string;
    urlLabel: string;
    github?: string;
};

const PROJECTS: Project[] = [
    {
        title: "Kyle in the Shower",
        img: kits,
        imgStill: kitsStill,
        imgAlt: "Stream overlay showing a break slide and its winner announcement",
        caption: "On-stream overlay announcing a break winner.",
        body: "Online store and live-stream toolkit for a trading card rip-and-ship business. A custom React app on top of WordPress and WooCommerce gives the streamer a live dashboard for running breaks and orders, with a REST API that also feeds real-time OBS overlays for sales, chase pulls and break results.",
        tech: ["React", "WordPress", "WooCommerce", "PHP", "REST API", "OBS"],
        url: "https://kyleintheshower.com",
        urlLabel: "Visit Site",
    },
    {
        title: "SearchbarStudio",
        img: searchbarStudio,
        imgAlt: "SearchbarStudio homepage",
        body: "Marketing site and client portal for a web design studio. Public pages up front, with client logins, invoices and subscription billing behind them, plus an admin back office for running projects.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Postgres", "Drizzle", "Better Auth", "Stripe"],
        url: "https://searchbarstudio.com",
        urlLabel: "Visit Site",
        github: "https://github.com/Firecoded/searchbarstudio",
    },
    {
        title: "jacobshoots.pictures",
        img: jacobShoots,
        imgAlt: "jacobshoots.pictures photo gallery",
        body: "A minimalist gallery to share travel photography. I built it from scratch rather than using a pre-made service to keep full control over the design, performance and cost.",
        tech: ["React", "TypeScript", "Vite", "Cloudflare R2", "Workers", "D1"],
        url: "https://jacobshoots.pictures",
        urlLabel: "Visit Site",
        github: "https://github.com/Firecoded/jtphotography",
    },
    {
        title: "Draggable Video Resizer",
        img: videoResizer,
        imgAlt: "Draggable Video Resizer extension popup",
        body: "Chrome extension that wraps video elements in a draggable container, preserves page flow with placeholders and enables custom video resizing. Built with event-driven content scripts and opt-in DOM manipulation.",
        tech: ["JavaScript", "Chrome Extension APIs", "Vite"],
        url: "https://chromewebstore.google.com/detail/draggable-video-resizer/elfibhkehlekegpggjaanbbjnnnnbdni",
        urlLabel: "Chrome Web Store",
        github: "https://github.com/Firecoded/draggable-video-resizer",
    },
    {
        title: "MinesweeperJS",
        img: minesweeper,
        imgAlt: "Minesweeper game board",
        body: "Minesweeper built with ReactJS. A fun challenge in applying game logic, state updates, and UI feedback in a framework more commonly used for interfaces than games.",
        tech: ["React", "SCSS"],
        url: "https://hardcore-saha-279f59.netlify.app/",
        urlLabel: "Play",
        github: "https://github.com/Firecoded/msweep",
    },
];

export const Projects = () => (
    <article id="work" className="panel">
        <header>
            <h2>Code Projects</h2>
        </header>
        <div className="project-grid">
            {PROJECTS.map((p, i) => (
                <div className="project-card" key={p.title}>
                    <a href={p.url} className="project-img" target="_blank" rel="noreferrer" tabIndex={-1}>
                        <picture>
                            {p.imgStill && <source media="(prefers-reduced-motion: reduce)" srcSet={p.imgStill} />}
                            <img src={p.img} alt={p.imgAlt} loading={i < 3 ? "eager" : "lazy"} />
                        </picture>
                    </a>
                    {p.caption && <p className="project-caption">{p.caption}</p>}
                    <div className="project-body">
                        <h3>{p.title}</h3>
                        <p>{p.body}</p>
                        <ul className="tags">
                            {p.tech.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            {p.github && (
                                <a href={p.github} className="btn btn-outline" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github" aria-hidden="true"></i> GitHub
                                </a>
                            )}
                            <a href={p.url} className="btn" target="_blank" rel="noreferrer">
                                {p.urlLabel}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </article>
);
