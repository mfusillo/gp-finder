/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { MapDisplay } from "./components/MapDisplay";
import "./App.css";
import NavBar from "./components/NavBar";
import AppointmentsList from "./components/AppointmentsList";

import { getUserLocality, getDoctorsPosition } from "./services/http.service";

export const App = () => {
  const [view, setView] = useState("mapDisplay");
  const [appointmentsList, setAppointmentsList] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [userLocality, setUserLocality] = useState(null);
  const [doctorsPosition, setDoctorsPosition] = useState([]);

  useEffect(() => {
    if (userPosition) {
      getUserLocality(userPosition)
        .then((res) => setUserLocality(res.data.data[0].locality))
        .catch((error) => console.log(error));
    }
  }, [userPosition]);

  useEffect(() => {
    if (userLocality) {
      getDoctorsPosition(userLocality)
        .then((res) => setDoctorsPosition(res.data.data))
        .catch((error) => console.log(error));
    }
  }, [userLocality]);
  return (
    <>
      <NavBar view={view} setView={setView} />
      {view === "mapDisplay" ? (
        <MapDisplay
          appointmentsList={appointmentsList}
          setAppointmentsList={setAppointmentsList}
          userPosition={userPosition}
          setUserPosition={setUserPosition}
          userLocality={userLocality}
          doctorsPosition={doctorsPosition}
        />
      ) : (
        <AppointmentsList appointmentsList={appointmentsList} />
      )}
    </>
  );
};

export default App;
