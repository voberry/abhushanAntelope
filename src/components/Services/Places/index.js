import React, {useEffect, useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Map, TileLayer, GeoJSON} from "react-leaflet";
import allProvinces from '../../../assets/generated-geojson/province'
import districts from '../../../assets/generated-geojson/districts'

import StickyBox from "react-sticky-box";
import Wallpaper from "../../../assets/images/wallpaper.jpg";

const Index = () => {

    const [selectedProvince, setSelectedProvince] = useState(null);

    const state = {
        lat: 28.3000,
        lng: 84.0240,
        center: [28.4000, 84.1240],
        zoom: 7,
    };

    const getColor = (d) => {
        return d === 1 ? '#ef5350' :
            d === 2 ? '#66bb6a' :
                d === 3 ? '#42a5f5' :
                    d === 4 ? '#ffca28' :
                        d === 5 ? '#bdbdbd' :
                            d === 6 ? '#ab47bc' :
                                '#d4e157';
    };

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.d_id),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    const onEachFeature = (feature, layer) => {
        const handleProvinceClick = (e, id) => {
            setSelectedProvince(id);
        };

        const handlePopUpOpen = (e) => {
            const popupContent = `<Popup><p>${feature.properties.title}</p>
                 </Popup>`;
            layer.bindPopup(popupContent)
        };

        layer.on({
            mouseover: (e) => handlePopUpOpen(e),
            click: (e) => handleProvinceClick(e, feature.properties.d_id)
        })
    };

    const position = [state.lat, state.lng];
    return (
        <div className={'gray-background'}>
            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-sm-12 col-md-10 p-5">
                        <Map center={position}
                             viewport={state.center}
                             zoom={6.5}
                             style={{height: '50vh'}}
                             doubleClickZoom={false}
                             closePopupOnClick={false}
                             dragging={false}
                             zoomSnap={false}
                             zoomDelta={false}
                             trackResize={false}
                             touchZoom={false}
                             scrollWheelZoom={false}
                             className={'card z-depth-2'}
                        >
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <GeoJSON data={allProvinces}
                                     style={style}
                                     onEachFeature={onEachFeature}
                            />
                        </Map>

                        {/*{selectedProvince && <div className="card px-5 py-2 mt-3 text-primary">*/}
                        {/*    {allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*    && allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*        .properties &&*/}
                        {/*    allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*        .properties.title*/}
                        {/*    }*/}

                        {/*    <br/>*/}

                        {/*    <span className={'text-primary'}>Province Capital : {allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*    && allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*        .properties &&*/}
                        {/*    allProvinces.features.find(item => item.properties.d_id === selectedProvince)*/}
                        {/*        .properties.capital*/}
                        {/*    }</span>*/}

                        {/*</div>}*/}


                        <div className="row d-flex align-items-stretch">
                            {selectedProvince && districts.features.filter(item => item.properties && item.properties.PROVINCE === selectedProvince)
                                .map(item =>
                                <div className={'col-sm-12 col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h6 className="card-title grey-text "><a>{item.properties && item.properties.DISTRICT}</a></h6>
                                            <Link to={`./places/${item.properties && item.properties.DISTRICT}`}>
                                                <button className="btn antelope-green-bg-light-outline  btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}
                        </div>

                    </div>

                    <div className="col-sm-12 col-md-2 p-5 px-2">
                        <StickyBox offsetTop={100}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(Index);