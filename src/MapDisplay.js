import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import axios from "axios";

export const MapDisplay = () => {
  const [position, setPosition] = useState(null);
  const [userLocality, setUserLocality] = useState(null);
  const [doctorsLocations, setDoctorsLocations] = useState([]);

  console.log(userLocality);

  useEffect(() => {
    if (position) {
      axios
        .get(
          `http://api.positionstack.com/v1/reverse?access_key=ec9f89e4efe3473d6c48f999555798c9&query=${position.lat},${position.lng}`
        )
        .then((res) => setUserLocality(res.data.data[0].locality));
    }
  }, [position]);

  useEffect(() => {
    if (userLocality) {
      axios
        .get(
          `http://api.positionstack.com/v1/forward?access_key=ec9f89e4efe3473d6c48f999555798c9&query=medical&region=${userLocality}`
        )
        .then((res) => setDoctorsLocations(res.data.data));
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
      <LocationMarker position={position} setPosition={setPosition} />
      {doctorsLocations.length > 0 &&
        position &&
        doctorsLocations.map((doctorsLocation, index) => (
          // <h1 key={index}>{doctorsLocation.longitude}</h1>
          <Marker
            key={index}
            position={[doctorsLocation.latitude, doctorsLocation.longitude]}
          >
            <Popup>
              <div>
                <h1>{doctorsLocation.label}</h1>
                <p>{doctorsLocation.label}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
export default MapDisplay;
