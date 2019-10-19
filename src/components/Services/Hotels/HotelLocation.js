import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const HotelLocation = () => {
    const state = {
        lat: 28.3000,
        lng: 84.1240,
        center: [28.4000, 84.1240],
        zoom: 13,
    };
    const position = [state.lat, state.lng]

    return (
        <div>
            <Map center={position} zoom={state.zoom} style={{height: '400px'}} className={'mt-4'}>
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