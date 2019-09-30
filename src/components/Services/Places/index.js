import React, { Component } from 'react'
import { Map, TileLayer, GeoJSON, Polyline} from "react-leaflet";
import Province1_geoJson from '../../../assets/generated-geojson/province'

const Index = () => {

    const state = {
        lat :28.3949,
        lng: 84.1240,
        zoom: 7,
    }

    const onEachFeature = (feature, layer) => {
        const popupContent = ` <Popup><p>${feature.properties.title}</p>
                <br />
                
 </Popup>`
        layer.bindPopup(popupContent)
    }

    const position = [state.lat, state.lng];
    return (
        <div>
            <h1> ALSO IM HERE</h1>
            <Map center={position}
                 zoom={7}
                 style={{height: '600px'}}
                 doubleClickZoom={false}
                 closePopupOnClick = {false}
                 dragging = {true}
                 zoomSnap = {false}
                 zoomDelta={false}
                 trackResize={false}
                 touchZoom={false}
                 scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={Province1_geoJson}
                         onEachFeature={onEachFeature}
                />
            </Map>
        </div>
    );
};

export default Index;