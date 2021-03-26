import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faBroadcastTower, faTimes } from "@fortawesome/free-solid-svg-icons";


const Nav = ({
  libraryOpen,
  setLibraryOpen,
  darkModeHandler,
  darkMode,

}) => {
  return (
    <div className={`nav ${darkMode ? "AppDark" : ""}`}>
      <h1>Yu Radio</h1>

      <div className="buttons-nav">
        <div className="darkmode-stations-btn">
          <button onClick={() => setLibraryOpen(!libraryOpen)}>
            <FontAwesomeIcon
              onClick={() => setLibraryOpen(!libraryOpen)}
              size="2x"
              icon={!libraryOpen ? faBroadcastTower : faTimes}
            />
          </button>
          <button>
            <FontAwesomeIcon
              onClick={darkModeHandler}
              color={darkMode ? "white" : ""}
              icon={faAdjust}
              size="2x"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;
