import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import UserPositionMarker from "./UserPositionMarker";
import { getUserLocality, getDoctorsLocations } from "../services/http.service";

export const MapDisplay = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [userLocality, setUserLocality] = useState(null);
  const [doctorsPositions, setDoctorsPositions] = useState([]);

  console.log(userPosition);

  useEffect(() => {
    if (userPosition) {
      getUserLocality(userPosition)
        .then((res) => setUserLocality(res.data.data[0].locality))
        .catch((error) => console.log(error));
    }
  }, [userPosition]);

  useEffect(() => {
    if (userLocality) {
      getDoctorsLocations(userLocality)
        .then((res) => setDoctorsPositions(res.data.data))
        .catch((error) => console.log(error));
    }
  }, [userLocality]);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserPositionMarker
        position={userPosition}
        setPosition={setUserPosition}
      />
      {doctorsPositions.length > 0 &&
        userPosition &&
        doctorsPositions.map((doctorsPosition, index) => (
          <Marker
            key={index}
            position={[doctorsPosition.latitude, doctorsPosition.longitude]}
          >
            <Popup>
              <div>
                <h1>{doctorsPosition.label}</h1>
                <p>{doctorsPosition.label}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
export default MapDisplay;
