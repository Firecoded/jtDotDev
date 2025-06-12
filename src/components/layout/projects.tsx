import { useEffect, useState } from "react";
import msweep from "../../assets/imgs/msweep-lg.png";
import devhub from "../../assets/imgs/devhub-lg.png";
import concertFinder from "../../assets/imgs/concert-finder-lg.png";
import jacobShootsPreview from "../../assets/imgs/jacobshootspreview.png";
import chromeSS from "../../assets/imgs/chrome-ss-1.png";

export const Projects = () => {
    const [className, setClassName] = useState("panel active inactive pt-4");

    useEffect(() => {
        setTimeout(() => setClassName("panel active pt-4"), 250);
    }, []);

    const projectCards = [
        {
            imgSrc: devhub,
            imgAlt: "DevHub app image",
            cardTitle: "DevHub",
            cardBody:
                "Developer-centric social app built with MongoDB, Express, React, and Node. Secure JWT auth, RESTful APIs, and responsive UI with theme toggle. Hosted on Vercel and Render (initial load may take ~30 seconds as the free-tier server spins up).",
            techUsed: "ReactJS, Redux, SCSS, MaterializeCSS, Node, Express, MongoDB, JWT",
            github: "https://github.com/Firecoded/dev_connect",
            liveDemo: "https://dev-hub-plum.vercel.app",
            demoIsActive: true,
        },
        {
            imgSrc: jacobShootsPreview,
            imgAlt: "Photo gallery preview",
            cardTitle: "jacobshoots.pictures",
            cardBody:
                "A minimalist gallery to share travel photography. I built it from scratch rather than using a pre-made service to keep full control over the design, performance and cost.",
            techUsed: "ReactJS, Typescript, Bootstrap 5",
            github: "https://github.com/Firecoded/jtphotography",
            liveDemo: "https://jacobshoots.pictures",
            demoIsActive: true,
        },
        {
            imgSrc: chromeSS,
            imgAlt: "Chrome extension preview",
            cardTitle: "Draggable Video Resizer",
            cardBody:
                "Developed a Chrome extension that wraps video elements in a draggable container, preserving page flow with placeholders and ensuring non-intrusive resizing. Powered by the Chrome Scripting API and event-driven content scripts.",
            techUsed: "JavaScript, HTML, CSS, Chrome Extension APIs, Vite",
            github: "https://github.com/Firecoded/draggable-video-resizer", // replace with actual
            liveDemo:
                "https://chromewebstore.google.com/detail/draggable-video-resizer/elfibhkehlekegpggjaanbbjnnnnbdni?authuser=2&hl=en",
            demoIsActive: true, // or true if published
        },
        {
            imgSrc: msweep,
            imgAlt: "Minesweeper game image",
            cardTitle: "MinesweeperJS",
            cardBody:
                "Minesweeper built with ReactJS. A fun challenge in applying game logic, state updates, and UI feedback in a framework more commonly used for interfaces than games.",
            techUsed: "ReactJS, SCSS",
            github: "https://github.com/Firecoded/msweep",
            liveDemo: "https://hardcore-saha-279f59.netlify.app/",
            demoIsActive: true,
        },
        {
            imgSrc: concertFinder,
            imgAlt: "Concert finder app image",
            cardTitle: "Concert Finder",
            cardBody:
                "Hackathon project built with jQuery that makes use of TicketMaster and Google APIs. Hackathons are great ways to learn valuable teamwork skills and learn to deliver solutions quickly under pressure.",
            techUsed: "jQuery, JSDoc, AJAX, MaterializeCSS, HTML, CSS",
            github: "https://github.com/Firecoded/ConcertFinder",
            liveDemo: "https://concert-finder.netlify.app",
            demoIsActive: true,
        },
    ];

    const buildProjectCards = () =>
        projectCards.map((c, i) => (
            <div className="col-sm-12 col-md-6 col-lg-4 d-flex" key={i}>
                <div className="card shadow-sm rounded h-100 w-100">
                    <img src={c.imgSrc} className="card-img-top" alt={c.imgAlt} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title font-weight-bold mb-2" style={{ fontSize: "1.8rem" }}>
                            {c.cardTitle}
                        </h5>
                        <p className="card-text mb-2" style={{ fontSize: "16px" }}>
                            {c.cardBody}
                        </p>
                        <p className="mb-3 text-muted" style={{ fontSize: "14px" }}>
                            <strong>Tech Used:</strong> {c.techUsed}
                        </p>
                        <div className="mt-auto d-flex justify-content-end">
                            <a
                                href={c.github}
                                className="btn btn-sm btn-outline-indigo mr-2"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            {c.demoIsActive ? (
                                <a href={c.liveDemo} className="btn btn-sm btn-ocean" target="_blank" rel="noreferrer">
                                    Live Demo
                                </a>
                            ) : (
                                <span className="badge badge-secondary align-middle">Demo Unavailable</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <article id="work" className={className}>
            <header>
                <h2 className="mb-4">Code Projects</h2>
            </header>
            <section>
                <div className="row">{buildProjectCards()}</div>
            </section>
        </article>
    );
};
