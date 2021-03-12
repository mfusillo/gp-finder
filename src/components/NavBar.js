import React from "react";
import "./NavBar.css";

export const NavBar = ({ view, setView }) => {
  const handleNavigation = (route) => {
    setView(route);
  };
  return (
    <header>
      <h1>GP Finder</h1>
      <ul className="navigation">
        <li
          onClick={() => {
            handleNavigation("mapDisplay");
          }}
          className="navigation-item"
          style={view === "mapDisplay" ? { fontWeight: "bold" } : {}}
        >
          Find a Doctor
        </li>
        <li
          onClick={() => {
            handleNavigation("appointmentsList");
          }}
          className="navigation-item"
          style={view === "appointmentsList" ? { fontWeight: "bold" } : {}}
        >
          Appointments List
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
