import React, {useEffect, useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {Map, TileLayer, GeoJSON} from "react-leaflet";
import allProvinces from '../../../assets/generated-geojson/province'
import Province1 from '../../../assets/generated-geojson/Province-1'
import Province2 from '../../../assets/generated-geojson/Province-2'
import Province3 from '../../../assets/generated-geojson/Province-3'
import Province4 from '../../../assets/generated-geojson/Province-4'
import Province5 from '../../../assets/generated-geojson/Province-5'
import Province6 from '../../../assets/generated-geojson/Province-6'
import Province7 from '../../../assets/generated-geojson/Province-7'

import StickyBox from "react-sticky-box";
import Wallpaper from "../../../assets/images/wallpaper.jpg";

const Index = () => {

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [allDistricts, setAllDistricts] = useState([]);
    const provincesDistricts1 = Province1.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts2 = Province2.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts3 = Province3.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts4 = Province4.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts5 = Province5.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts6 = Province6.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    const provincesDistricts7 = Province7.features.map(item => {
        return {
            district: item.properties.DISTRICT,
            headquaters: item.properties.HQ,
            provinces_id: item.properties.PROVINCE
        }
    });

    useEffect(()=> {
        setAllDistricts(provincesDistricts1.concat(provincesDistricts2).concat(provincesDistricts3).concat(provincesDistricts4).concat(provincesDistricts5).concat(provincesDistricts6).concat(provincesDistricts7))
    }, [provincesDistricts1, provincesDistricts2, provincesDistricts3, provincesDistricts4, provincesDistricts5, provincesDistricts6, provincesDistricts7]);

    const state = {
        lat: 28.3000,
        lng: 84.1240,
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
                    <div className="col-md-10 p-5">
                        <Map center={position}
                             viewport={state.center}
                             zoom={6.5}
                             style={{height: '60vh'}}
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

                        {selectedProvince && <div className="card p-5 mt-3">
                            {allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                            && allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                                .properties &&
                            allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                                .properties.title
                            }

                            <br/>

                            <span>Province Capital : {allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                            && allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                                .properties &&
                            allProvinces.features.find(item => item.properties.d_id === selectedProvince)
                                .properties.capital
                            }</span>

                        </div>}


                        <div className="row">
                            {selectedProvince === 1 && provincesDistricts1.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`./${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}
                            {selectedProvince === 2 && provincesDistricts2.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}

                            {selectedProvince === 3 && provincesDistricts3.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}
                            {selectedProvince === 4 && provincesDistricts4.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}
                            {selectedProvince === 5 && provincesDistricts5.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}

                            {selectedProvince === 6 && provincesDistricts6.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}

                            {selectedProvince === 7 && provincesDistricts7.map(item =>
                                <div className={'col-md-3 my-2'}>
                                    <div className="card">
                                        <img className="card-img-top"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        {console.log(item)}
                                        <div className="card-body">
                                            <h6 className="card-title"><a>{item.district}</a></h6>
                                            <Link to={`/${item.district}`}>
                                                <button className="btn antelope-green-bg btn-sm white-text p-2">View
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>)}
                        </div>

                    </div>

                    <div className="col-md-2 p-5 px-2">
                        <StickyBox offsetTop={100}>
                            <div className="row">
                                <div className="col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body">
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