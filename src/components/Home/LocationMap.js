import React, {useEffect, useState} from 'react'
import {Map, Marker, Popup, TileLayer, Polyline, Circle, Tooltip, ZoomControl} from 'react-leaflet'
import Kathmandu from '../../assets/images/kathmandu.jpeg'

const position = [28.3949, 84.1240];
const DEFAULT_VIEWPORT = {
    center: [28.3949, 84.1240],
    zoom: 7,
};

const LocationMap = (props) => {
    const {location} = props;
    const [locationRoutes, setLocationRoutes] = useState([]);
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

    const handleOnClick = () => {
        setViewPort(DEFAULT_VIEWPORT)
    };

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
            <Polyline color="lime" positions={locationRoutes}/>
        </Map>
    );
};

export default LocationMap;