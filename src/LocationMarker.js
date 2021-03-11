import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export const LocationMarker = (props) => {
  const { position, setPosition } = props;
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
export default LocationMarker;
