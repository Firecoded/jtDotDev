import { useState, useEffect } from "react";

export const Video = () => {
    const [className, setClassName] = useState("panel active inactive");
    useEffect(() => {
        setTimeout(() => setClassName("panel active"), 250);
    }, []);
    return (
        <article id="contact" className={className}>
            <header>
                <h2>Video Projects</h2>
            </header>
            <h4>Up the Pacific Coast</h4>
            <p className="mb-2">
                Decided to take a backpacking road trip to explore the beautiful scenery from San Diego to Seattle.
                Rented a car, booked a flight home and planned as little as possible in between.
            </p>
            <div className="w-100" style={{ position: "relative", paddingBottom: "56.25%", height: "0" }}>
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
        </article>
    );
};
