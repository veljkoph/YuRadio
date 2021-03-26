import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentStation,
  isPlaying,
  setIsPlaying,
  audioRef,
  setCurrentStation,
  stations,
  setStations,
  darkMode,
  filteredStations,
  setInputValue,
  inputValue,
}) => {
  //Active radio on skip change
  useEffect(() => {
    const newStations = stations.map((s) => {
      if (s.id === currentStation.id) {
        return {
          ...s,
          active: true,
        };
      } else {
        return {
          ...s,
          active: false,
        };
      }
    });
    setStations(newStations);
  }, [currentStation]);
  useEffect(() => {
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  }, [currentStation]);

  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const skipStationHandler = (direction) => {
    let currentIndex = filteredStations.findIndex((s) => s.id === currentStation.id);
    if (direction === "skip-forward") {
      setCurrentStation(filteredStations[currentIndex + 1] || filteredStations[0]);
      audioRef.current.play();
    }
    if (direction === "skip-back") {
      if (currentIndex - 1 < 0) {
        setCurrentStation(filteredStations[filteredStations.length - 1]);
        playHandler(audioRef, isPlaying);
      } else setCurrentStation(filteredStations[currentIndex - 1]);
    }
  };

  return (
    <div className="player-wrapper">
      <div className="player">
        <img src={currentStation.cover} alt={currentStation.name}></img>
        <h2>{currentStation.name}</h2>
        <h3>{currentStation.location}</h3>
        <div className="buttons">
          <FontAwesomeIcon
            onClick={() => skipStationHandler("skip-back") }
            icon={faAngleLeft}
            size="2x"
            color={darkMode ? "white" : ""}
            className="single-btn-player"
          />
          <FontAwesomeIcon
            onClick={playHandler}
            icon={isPlaying ? faPause : faPlay}
            size="2x"
            color={darkMode ? "white" : ""}
            className="single-btn-player"
          />
          <FontAwesomeIcon
            onClick={() => skipStationHandler("skip-forward")}
            icon={faAngleRight}
            size="2x"
            className="single-btn-player"
            color={darkMode ? "white" : ""}
          />
        </div>
      </div>
    </div>
  );
};
export default Player;
