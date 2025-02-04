import { useEffect, useState } from "react";
import msweep from "../../assets/imgs/msweep-lg.png";
import devhub from "../../assets/imgs/devhub-lg.png";
import concertFinder from "../../assets/imgs/concert-finder-lg.png";
import jacobShootsPreview from "../../assets/imgs/jacobshootspreview.png";

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
                "Full-stack social media app for developers to connect, create profiles, add/like posts, and discuss posts further. Fun project to work on in my limited free time, recently added a theme toggle.",
            techUsed: "ReactJS, Redux, SCSS, MaterializeCSS, Node, Express, MongoDB, JWT",
            github: "https://github.com/Firecoded/dev_connect",
            liveDemo: "https://salty-caverns-71357.herokuapp.com/",
            demoIsActive: false,
        },
        {
            imgSrc: jacobShootsPreview,
            imgAlt: "Photo gallery preview",
            cardTitle: "jacobshoots.pictures",
            cardBody:
                "Minimal photo gallery to display travel photography. I could have used an existing online gallery service but building it from scratch was more fun.",
            techUsed: "ReactJS, Typescript, Bootstrap 5",
            github: "https://github.com/Firecoded/jtphotography",
            liveDemo: "https://jacobshoots.pictures",
            demoIsActive: true,
        },
        {
            imgSrc: msweep,
            imgAlt: "Minesweeper game image",
            cardTitle: "MinesweeperJS",
            cardBody:
                "Building simple games often times presents complex problems. Using a framework like ReactJS to build games requires some creative logic as opposed to more traditional game frameworks.",
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
            techUsed: "jQuery, JSDoc,  AJAX, MaterializeCSS, HTML, CSS",
            github: "https://github.com/Firecoded/ConcertFinder",
            liveDemo: "https://concert-finder.netlify.app",
            demoIsActive: true,
        },
    ];
    const font20 = { fontSize: "22px" };
    const buildProjectCards = () => {
        return projectCards.map((c, i) => {
            return (
                <div className="col-sm-11 col-md-5 col-lg-4 d-flex" key={i}>
                    <div className="card mb-0 mr-1 h-100">
                        <img src={c.imgSrc} className="card-img-top" alt={c.imgAlt} />
                        <div className="card-body d-flex flex-column">
                            <h3 className="card-title">
                                <strong>{c.cardTitle}</strong>
                            </h3>
                            <div className="card-text mb-3 flex-grow-1" style={font20}>
                                <p className="mb-3 ">{c.cardBody}</p>
                                <p className="mb-2">
                                    <span className="">Tech Used: {c.techUsed}</span>
                                </p>
                            </div>
                            <div>
                                <a href={c.github} className="card-link mt-2" target="_blank" rel="noreferrer">
                                    GitHub Repo
                                </a>
                                {c.demoIsActive ? (
                                    <a href={c.liveDemo} className="card-link mt-2" target="_blank" rel="noreferrer">
                                        Live Demo
                                    </a>
                                ) : (
                                    <span
                                        className="card-link mt-2 text-disabled"
                                        style={{ textDecoration: "line-through" }}
                                    >
                                        Live Demo
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <article id="work" className={className}>
            <header>
                <h2>Code Projects</h2>
            </header>
            <section>
                <div className="row">{buildProjectCards()}</div>
            </section>
        </article>
    );
};
