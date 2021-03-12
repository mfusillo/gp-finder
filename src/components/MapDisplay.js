import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import UserPositionMarker from "./UserPositionMarker";
import AppointmentForm from "./AppointmentForm";

export const MapDisplay = ({
  appointmentsList,
  setAppointmentsList,
  userPosition,
  setUserPosition,
  doctorsPosition,
}) => {
  return (
    <MapContainer
      center={
        userPosition ? [userPosition.lat, userPosition.lng] : [51.505, -0.09]
      }
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "80vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UserPositionMarker
        position={userPosition}
        setPosition={setUserPosition}
      />
      {doctorsPosition.length > 0 &&
        userPosition &&
        doctorsPosition.map((doctorsPosition, index) => (
          <Marker
            key={index}
            position={[doctorsPosition.latitude, doctorsPosition.longitude]}
          >
            <Popup>
              <AppointmentForm
                appointmentsList={appointmentsList}
                setAppointmentsList={setAppointmentsList}
                doctorsPosition={doctorsPosition}
              />
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};
export default MapDisplay;
