import React, {Component} from 'react'
import {Map, TileLayer, GeoJSON, Polyline} from "react-leaflet";
import Province1_geoJson from '../../../assets/generated-geojson/province'

const Index = () => {

    const state = {
        lat: 28.3949,
        lng: 84.1240,
        zoom: 7,
    };

    const getColor = (d) => {
        return d ===1 ? '#ef5350' :
            d === 2 ? '#66bb6a' :
                d === 3 ? '#42a5f5' :
                    d === 4 ? '#ffca28' :
                        d === 5 ? '#bdbdbd' :
                            d === 6 ? '#ab47bc' :
                                    '#d4e157';
    };

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.cartodb_id),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    const onEachFeature = (feature, layer) => {
        const popupContent = ` <Popup><p>${feature.properties.title}</p>
                <br />
                <p>Capital : ${feature.properties.capital}</p>
                <p>Districts : ${feature.properties.districts}</p>
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
                 closePopupOnClick={false}
                 dragging={true}
                 zoomSnap={false}
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
                         style={style}
                         onEachFeature={onEachFeature}
                />
            </Map>
        </div>
    );
};

export default Index;