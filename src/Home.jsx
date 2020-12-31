import React, {useState} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import {Audiofiles} from "./Audiofiles";
import './Styles/Home.css';

export default function PlayerApp() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

    const handleClickNext = () => {
        const newIndex = currentTrackIndex + 1;
        if (newIndex < Audiofiles.length) {
            setCurrentTrackIndex(newIndex);
        }
    }

    const handleClickPrevious = () => {
        const newIndex = currentTrackIndex - 1;
        if (newIndex > -1) {
            setCurrentTrackIndex(newIndex);
        }
    }

    return (
        <div className="container">
            <h3>In loving memory of</h3>
            <h1>Henry McGrath</h1>
            <h4>14th November 1936 - 6th Dec 2020</h4>
            <ol>
                {Audiofiles.map((track) => <li>{track.name}</li>)}
            </ol>
            <p>Established 2020 by Tara Curran and Jack Crymble</p>
            <AudioPlayer
                className="audio-player"
                header={Audiofiles[currentTrackIndex].name}
                src={Audiofiles[currentTrackIndex].src}
                showSkipControls={true}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPrevious}
            />
        </div>
      );
}