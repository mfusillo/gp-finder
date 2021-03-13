import React, { useEffect } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export const UserPositionMarker = (props) => {
  const { position, setPosition } = props;
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const icon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    if (!position) {
      map.locate();
    }
  }, []);

  return position === null ? null : (
    <Marker icon={icon} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};
export default UserPositionMarker;
