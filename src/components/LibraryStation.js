import React from "react";

const LibraryStation = ({
  station,
  stations,
  setCurrentStation,
  audioRef,
  isPlaying,
  setStations,
  darkMode,
}) => {
  const currentStationHandler = () => {
    setCurrentStation(station);
    //Active State on song
    const newStations = stations.map((s) => {
      if (s.id === station.id) {
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
    //?????????????
    const playHandler = (isPlaying, audioRef) => {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
    };
    playHandler(isPlaying, audioRef);
  };

  return (
    <div
      onClick={currentStationHandler}
      className={`library-station ${station.active ? "selected" : ""} ${
        darkMode && station.active ? "selected-dark" : "library-station-dark"
      }`}
    >
      <img src={station.cover} alt={station.name}></img>

      <div className="station-description">
        <h3>{station.name}</h3>
        <h4>{station.location}</h4>
      </div>
    </div>
  );
};
export default LibraryStation;
