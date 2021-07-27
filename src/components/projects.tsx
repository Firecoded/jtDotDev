import msweep from "../assets/imgs/msweep-lg.png";
import devhub from "../assets/imgs/devhub-lg.png";

export const Projects = (): JSX.Element => {
    const carouselData = [
        {
            imgSrc: devhub,
            imgAlt: "DevHub app image",
            cardTitle: "DevHub",
            cardBody:
                "Full-stack social media application for developers to connect, create profiles, add/like posts, and discuss posts further. Fun project to work on in my limited free time, recently added a theme toggle.",
            techUsed: "ReactJS, Redux, SCSS, Node, Express, MongoDB, JWT",
            github: "https://github.com/Firecoded/dev_connect",
            liveDemo: "https://salty-caverns-71357.herokuapp.com/",
        },
        {
            imgSrc: msweep,
            imgAlt: "Minesweeper game image",
            cardTitle: "MinesweeperJS",
            cardBody:
                "Building simple games often times presents complex problems. The task is like a series of practice problems that ends with game to show off in the end. Using a framework like ReactJS to build games requires some creative logic as opposed to more traditional frameworks",
            techUsed: "ReactJS, SCSS",
            github: "https://github.com/Firecoded/msweep",
            liveDemo: "https://hardcore-saha-279f59.netlify.app/",
        },
    ];
    const buildCarouselItems = () => {
        return carouselData.map((c, i) => {
            return (
                <div className={`carousel-item ${i === 0 ? "active" : ""} h-100`} data-interval="false" key={i}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="card mb-3">
                            <img src={c.imgSrc} className="card-img-top" alt={c.imgAlt} />
                            <div className="card-body">
                                <h4 className="card-title">
                                    <strong>{c.cardTitle}</strong>
                                </h4>
                                <p className="card-text">{c.cardBody}</p>
                                <p className="card-text">
                                    <span className="text-muted">Tech Used: {c.techUsed}</span>
                                </p>
                                <a
                                    href={c.github}
                                    className="card-link highlight-text"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub Repo
                                </a>
                                <a
                                    href={c.liveDemo}
                                    className="card-link highlight-text"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div
            id="carouselIndicators"
            className="carousel slide position-relative h-100 w-100"
            data-ride="carousel"
            data-interval="false"
        >
            <div className="d-flex w-50 justify-content-center">
                <ol className="carousel-indicators">
                    {carouselData.map((c, i) => {
                        return (
                            <li
                                key={i}
                                data-target="#carouselIndicators"
                                data-slide-to={i}
                                className={`${i === 0 ? "active" : ""}`}
                            ></li>
                        );
                    })}
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </ol>
            </div>

            <div className="carousel-inner h-100">{buildCarouselItems()}</div>
        </div>
    );
};