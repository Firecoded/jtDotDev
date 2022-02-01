import { useState, useEffect, createRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import albumArt from "../../assets/imgs/album-art.jpg";
import H5AudioPlayer from "react-h5-audio-player";
// songs
import tropicalRisk from "../../assets/audio/TropicalRisk.mp3";
import chatter from "../../assets/audio/chatter.mp3";
import celes from "../../assets/audio/celes.mp3";
import creepiano from "../../assets/audio/creepiano.mp3";

const SONGS = [
    { src: celes, name: "celes" },
    { src: tropicalRisk, name: "Tropical Risk" },
    { src: chatter, name: "chatter" },
    { src: creepiano, name: "creepiano" },
];

export const Audio = () => {
    const [className, setClassName] = useState("panel active inactive");
    const [activeSongIndex, setActiveSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const playerRef = createRef<H5AudioPlayer>();

    useEffect(() => {
        setTimeout(() => setClassName("panel active"), 250);
    }, []);

    const handleNextPrev = (newIndex: number): void => {
        if (newIndex >= SONGS.length) {
            return setActiveSongIndex(0);
        }
        if (newIndex < 0) {
            setActiveSongIndex(SONGS.length - 1);
        }
        setActiveSongIndex(newIndex);
    };

    const buildSongList = () => {
        return (
            <ul className="list-group">
                {SONGS.map((song, index) => {
                    let iconClassName = "fa-play";
                    const active = activeSongIndex === index;
                    if (active && isPlaying) {
                        iconClassName = "fa-pause";
                    }
                    return (
                        <li
                            key={song.name}
                            className={`list-group-item ${active ? "active" : ""}`}
                            onClick={() => setActiveSongIndex(index)}
                        >
                            <i
                                className={`mr-4 cursor-pointer icon solid ${iconClassName} `}
                                onClick={(e) => {
                                    if (playerRef.current && active) {
                                        if (active) {
                                            playerRef.current.togglePlay(e);
                                        } else {
                                            setActiveSongIndex(index);
                                        }
                                    }
                                }}
                            ></i>
                            <span>{song.name}</span>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const next = activeSongIndex + 1;
    const prev = activeSongIndex - 1;

    return (
        <article id="contact" className={className}>
            <header>
                <h2>Audio Projects</h2>
            </header>
            <p className="mb-3">
                In my free time I like to mess around with different sounds and loops on my Mac. I didn't know where to
                share them until now. (If you think of good band names, send me a message &#128521;)
                <br />
                Genre: Cinematic, Electronic
            </p>
            <div className="row mb-2">
                <div className="col-lg-5 col-md-6 col-sm-12">{buildSongList()}</div>
                <div className="col-lg-7 col-md-6 col-sm-12 order-first order-md-last">
                    <div className="image fit">
                        <img src={albumArt} alt="album cover art" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <AudioPlayer
                        autoPlay={false}
                        src={SONGS[activeSongIndex].src}
                        onClickNext={() => handleNextPrev(next)}
                        onClickPrevious={() => handleNextPrev(prev)}
                        showSkipControls={true}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        ref={playerRef}
                        autoPlayAfterSrcChange={true}
                        onEnded={() => handleNextPrev(next)}
                        customAdditionalControls={[]}
                    />
                </div>
            </div>
        </article>
    );
};
