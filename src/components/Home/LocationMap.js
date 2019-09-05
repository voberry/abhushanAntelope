import React, {useEffect, useState} from 'react'
import {Map, Marker, Popup, TileLayer, Polyline, Circle, Tooltip, ZoomControl} from 'react-leaflet'
import Kathmandu from '../../assets/images/kathmandu.jpeg';
import axios from 'axios';

const position = [28.3949, 84.1240];
const DEFAULT_VIEWPORT = {
    center: [28.3949, 84.1240],
    zoom: 7,
};

const LocationMap = (props) => {
    const {location} = props;
    const [locationRoutes, setLocationRoutes] = useState([]);
    const [directions, setDirections] = useState([]);
    const [directionService, setDirectionService] = useState([]);
    const [viewPort, setViewPort] = useState(DEFAULT_VIEWPORT);

    useEffect(() => {
        let tempLocationArray = [...locationRoutes];
        location.forEach(item => {
            let tempArray = [];
            tempArray.push(item.latitude);
            tempArray.push(item.longitude);
            tempLocationArray.push(tempArray);
            setLocationRoutes(tempLocationArray);
        })
    }, [location]);

    useEffect(()=>{
        axios.get(`https://api.tomtom.com/routing/1/calculateRoute/${locationRoutes.join(':')}/json?avoid=unpavedRoads&key=srmwhKEhBWfETVCcS2e0wYlMd0GoW21h`)
            .then(response => setDirections(response.data));
    }, [locationRoutes])

    const handleOnClick = () => {
        setViewPort(DEFAULT_VIEWPORT)
    };

    useEffect(()=>{
        let superTemp = directions.routes
            .map(item => item.legs.map(item2 => item2.points))
            .flat()
            .flat();
        console.log(JSON.stringify(directions));
    }, [directions])

    return (
        <Map style={{
            height: '100%'
        }}
             onClick={() => handleOnClick}
             viewport={viewPort}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {location && location.map(item => <Circle center={[item.latitude, item.longitude]} fillColor="blue"
                                                      radius={5000}>
                <Tooltip style={{
                    width: '200px',
                }}> <h6 className={'red-text font-weight-bold text-center'}>{item.title}</h6>
                    <img src={Kathmandu} alt={'Ktm'} height={'200px'} width={'200px'}/>
                </Tooltip>
            </Circle>)}
            {/*<Polyline color="lime" positions={directions && directions[0].legs[0] &&  directions[0].legs[0].points}/>*/}
        </Map>
    );
};

export default LocationMap;