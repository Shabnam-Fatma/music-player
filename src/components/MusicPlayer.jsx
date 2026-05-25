import React from "react";
import { useMusic } from "../hooks/useMusic";

const MusicPlayer = () => {
  const { currentTrack } = useMusic();
  return (
    <div className="music-player">
      <audio />
      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>
    </div>
  );
};

export default MusicPlayer;
