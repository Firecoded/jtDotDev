import { useState, useEffect } from "react";
import preview from "../../assets/imgs/preview2.png";

export const Video = () => {
    const [className, setClassName] = useState("panel active inactive pt-4");
    useEffect(() => {
        setTimeout(() => setClassName("panel active pt-4"), 250);
    }, []);
    return (
        <article id="contact" className={className}>
            <header className="mb-3">
                <h2>Video</h2>
            </header>
            <h4 className="mb-2">Up the Pacific Coast</h4>
            <p className="mb-3" style={{ fontSize: "22px" }}>
                Decided to take a backpacking road trip to explore the beautiful scenery from San Diego to Seattle.
                Rented a car, booked a flight home and planned as little as possible in between.
            </p>
            <div className="w-100 mb-4" style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
                <iframe
                    className="w-100"
                    width="1280"
                    height="720"
                    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                    src={`https://www.youtube.com/embed/osEwhz4p1S4?vq=hd720`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                ></iframe>
            </div>
            <header className="mb-3">
                <h2>Photography</h2>
            </header>
            <a
                href="https://jacobshoots.pictures"
                className="card-link mt-2 d-inline-block"
                target="_blank"
                rel="noreferrer"
            >
                <h4 style={{ color: "#007bff", textDecoration: "underline" }}>jacobshoots.pictures</h4>
            </a>
            <p className="mb-3 mt-2" style={{ fontSize: "22px" }}>
                Built a photo gallery to display a curated collection of beautiful images, featuring landscapes,
                portraits, and street photography from around the world.
            </p>
            <img src={preview} className="card-img-top" alt="gallery preview" />
        </article>
    );
};
