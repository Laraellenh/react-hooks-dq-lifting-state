import React from "react";
import Menu from "./Menu";

function Header({setDarkMode, darkMode}) {
 

  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Header;
