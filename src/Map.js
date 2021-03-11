import React, { useEffect } from "react";
// import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

export const Map = () => {
  useEffect(() => {
    // create map
    L.map("map", {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
      ],
    });
  }, []);

  return <div id="map" style={{ height: "100vh" }} />;
};
export default Map;
