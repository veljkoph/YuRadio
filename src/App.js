import React, { useState, useRef, useEffect } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./data";

function App() {
  //using ref for audio play
  const audioRef = useRef(null);

  const [stations, setStations] = useState(data());
  const [currentStation, setCurrentStation] = useState(stations[0]);
  const [filteredStations, setFilteredStations] = useState([]);
  const [status, setStatus] = useState("all");
  const [isPlaying, setIsPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    filteredStationsHandler();
  }, [status, stations]);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  const filteredStationsHandler = () => {
    switch (status) {
      case "srb":
        setFilteredStations(stations.filter((s) => s.country === "srb"));
        break;
      case "cro":
        setFilteredStations(stations.filter((s) => s.country === "cro"));
        break;
      case "mkd":
        setFilteredStations(stations.filter((s) => s.country === "mkd"));
        break;
      case "bih":
        setFilteredStations(stations.filter((s) => s.country === "bih"));
        break;
      case "slo":
        setFilteredStations(stations.filter((s) => s.country === "slo"));
        break;
      case "mne":
        setFilteredStations(stations.filter((s) => s.country === "mne"));
        break;

      default:
        setFilteredStations(stations);
    }
  };

  return (
    <div className={darkMode ? "AppDark" : "App"}>
      <Nav
        libraryOpen={libraryOpen}
        setLibraryOpen={setLibraryOpen}
        darkModeHandler={darkModeHandler}
        darkMode={darkMode}
        filteredStations={filteredStations}
        setFilteredStations={setFilteredStations}
        setStatus={setStatus}
        status={status}
        stations={stations}
      />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentStation={currentStation}
        setCurrentStation={setCurrentStation}
        darkMode={darkMode}
        audioRef={audioRef}
        stations={stations}
        setStations={setStations}
        filteredStations={filteredStations}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />

      <Library
        libraryOpen={libraryOpen}
        darkMode={darkMode}
        currentStation={currentStation}
        setCurrentStation={setCurrentStation}
        stations={stations}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setStations={setStations}
        setStatus={setStatus}
        filteredStations={filteredStations}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <audio ref={audioRef} src={currentStation.audio}></audio>
    </div>
  );
}

export default App;
