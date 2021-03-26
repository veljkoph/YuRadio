import React from "react";
import LibraryStation from "./LibraryStation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faWineBottle } from "@fortawesome/free-solid-svg-icons";
const Library = ({
  stations,
  darkMode,
  currentStation,
  setCurrentStation,
  audioRef,
  isPlaying,
  setIsPlaying,
  setStations,
  libraryOpen,
  filteredStations,
  setStatus,
  setInputValue,
  inputValue,
}) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  let searchedStations = stations.filter((s) => {
    return s.name.toLowerCase().includes(inputValue.toString().toLowerCase());
  });

  return (
    <div
      className={`library ${libraryOpen ? "active-library" : ""} ${
        darkMode ? "library-dark" : ""
      }`}
    >
      <h1>Station List:</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Station Search: "
          value={inputValue}
          onChange={onChangeHandler}
          className={darkMode ? "select-dark" : ""}
        />
        {inputValue.length > 0 ? (
          <FontAwesomeIcon
            color={darkMode ? "white" : "black"}
            icon={faTimesCircle}
            onClick={() => setInputValue("")}
          />
        ) : (
          ""
        )}
      </div>
      <div className="select">
        <select
          onChange={statusHandler}
          className={darkMode ? "select-dark" : ""}
          name="countries"
        >
          <option value="all">All</option>
          <option value="srb">Serbian</option>
          <option value="cro">Croatian</option>
          <option value="mkd">Macedonian</option>
          <option value="bih">Bosnian</option>
          <option value="slo">Slovenian</option>
          <option value="mne">Montenegrian</option>
        </select>
      </div>
      <div className="">
        {inputValue.length > 0
          ? searchedStations.map((station) => (
              <LibraryStation
                audioRef={audioRef}
                currentStation={currentStation}
                setStations={setStations}
                setIsPlaying={setIsPlaying}
                setCurrentStation={setCurrentStation}
                key={station.id}
                station={station}
                isPlaying={isPlaying}
                stations={stations}
                darkMode={darkMode}
              />
            ))
          : filteredStations.map((station) => (
              <LibraryStation
                audioRef={audioRef}
                currentStation={currentStation}
                setStations={setStations}
                setIsPlaying={setIsPlaying}
                setCurrentStation={setCurrentStation}
                key={station.id}
                station={station}
                isPlaying={isPlaying}
                stations={stations}
                darkMode={darkMode}
              />
            ))}

        {}
      </div>
    </div>
  );
};
export default Library;
