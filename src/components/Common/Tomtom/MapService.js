import React, {useEffect} from 'react';

const MapService = props => {

    console.log(props)

    useEffect(()=>{
        let map = window.tomtom.L.map('map', {
            key: 'srmwhKEhBWfETVCcS2e0wYlMd0GoW21h',
            source: 'vector',
            center: [28.3949, 84.1240],
            basePath: '/sdk'
        });
        map.zoomControl.setPosition('topright');

        let routeOnMapView = window.tomtom.routeOnMap({

            startMarker: {
                icon: window.tomtom.L.icon({
                    iconUrl: process.env.PUBLIC_URL + `/sdk/images/start-white.png`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            },

            endMarker: {
                icon: window.tomtom.L.icon({
                    iconUrl: process.env.PUBLIC_URL + `/sdk/images/end-white.png`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            }
        }).addTo(map);

        let routeInputsInstance = window.tomtom.routeInputs({location: false})
            .addTo(map);

        routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, function(eventObject) {
            routeOnMapView.draw(eventObject.points);
        });

        routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, function(eventObject) {
            routeOnMapView.draw(eventObject.points);
        });

    });


    return <div id='map'/>

};

export default MapService;