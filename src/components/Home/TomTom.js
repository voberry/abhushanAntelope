import React, {useEffect} from 'react';
import '../../assets/style.css'

const TomTom = props => {

    console.log(props);

    console.log('process.env.PUBLIC_URL', process.env.PUBLIC_URL)
    useEffect(()=>{
        let map = window.tomtom.L.map('map', {
            key: 'srmwhKEhBWfETVCcS2e0wYlMd0GoW21h',
            source: 'vector',
            center: [28.3949, 84.1240],
            basePath: '/sdk'
        });
        map.zoomControl.setPosition('topright');

        // Adding the route widget
        let routeOnMapView = window.tomtom.routeOnMap({
            // Options for the route start marker
            startMarker: {
                icon: window.tomtom.L.icon({
                    iconUrl: process.env.PUBLIC_URL + `/sdk/images/start-white.png`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            },
            // Options for the route end marker
            endMarker: {
                icon: window.tomtom.L.icon({
                    iconUrl: process.env.PUBLIC_URL + `/sdk/images/end-white.png`,
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                })
            }
        }).addTo(map);

        // Creating route inputs widget
        let routeInputsInstance = window.tomtom.routeInputs({location: false})
            .addTo(map);

        // Connecting the route inputs widget with the route widget
        routeInputsInstance.on(routeInputsInstance.Events.LocationsFound, function(eventObject) {
            routeOnMapView.draw(eventObject.points);
        });

        routeInputsInstance.on(routeInputsInstance.Events.LocationsCleared, function(eventObject) {
            routeOnMapView.draw(eventObject.points);
        });

    });


    return <div id='map' className={'w-100 h-100'}/>

};

export default TomTom;