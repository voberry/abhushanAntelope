import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const HotelLocation = () => {
  const state = {
    lat: 28.3,
    lng: 84.124,
    center: [28.4, 84.124],
    zoom: 13
  };
  const position = [state.lat, state.lng];

  return (
    <div>
      <Map center={position} zoom={state.zoom} style={{ height: "480px" }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default HotelLocation;
