import { useEffect, useState } from "react";
import msweep from "../../assets/imgs/msweep-lg.png";
import devhub from "../../assets/imgs/devhub-lg.png";
import concertFinder from "../../assets/imgs/concert-finder-lg.png";

export const Projects = () => {
    const [className, setClassName] = useState("panel active inactive");
    useEffect(() => {
        setTimeout(() => setClassName("panel active"), 250);
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
        },
    ];
    const buildProjectCards = () => {
        return projectCards.map((c, i) => {
            return (
                <div className="card mb-3" key={i}>
                    <img src={c.imgSrc} className="card-img-top" alt={c.imgAlt} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>{c.cardTitle}</strong>
                        </h4>
                        <p className="card-text mb-3">{c.cardBody}</p>
                        <p className="card-text mb-3">
                            <span className="">
                                Tech Used: <strong>{c.techUsed}</strong>
                            </span>
                        </p>
                        <a href={c.github} className="card-link mt-2" target="_blank" rel="noreferrer">
                            GitHub Repo
                        </a>
                        <a href={c.liveDemo} className="card-link mt-2" target="_blank" rel="noreferrer">
                            Live Demo
                        </a>
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
                <div className="card-columns">{buildProjectCards()}</div>
            </section>
        </article>
    );
};
