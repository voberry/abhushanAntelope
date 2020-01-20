import React from 'react';
import {Link} from "react-router-dom";
import StickyBox from "react-sticky-box";
import HotelsCarousel from './TrekCarousel'
import HotelsLocation from './TrekLocation'

import Wallpaper from "../../../assets/images/wallpaper.jpg";

const Trek = () => {
    return (
        <div className={'gray-background'}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 col-sm-12 p-5">
                        <div className="row">
                            <div className="col-md-9 col-sm-12">
                                <h3 className={'h3-responsive antelope-green'}>
                                    Trek 1
                                </h3>
                                <h6 className={'grey-text small' }>
                                    <i className="fas fa-map-marked-alt fa-sm red-text pr-2" />
                                    Kapan, Kathmandu, Nepal</h6>
                            </div>

                            <div className="col-md-3 col-sm-12 ">
                                <button className={'btn antelope-green-bg-light-outline  white-text btn-sm float-right mt-3'}>Book Now</button>
                            </div>
                        </div>

                        <div className={'z-depth-4 thumbnailCarousels'}>
                            <HotelsCarousel/>
                        </div>

                        <div className="row">
                            <div className="col-md-7">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="font-weight-bolder mb-3 antelope-green h4-responsive"><strong>Kathmandu</strong></h4>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus enim eum harum quae tenetur, ullam? Ab adipisci aut culpa earum perspiciatis porro quis quisquam reiciendis velit veritatis, voluptas voluptates?
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, commodi doloribus magnam magni modi placeat quia quidem sint ut! Asperiores consectetur dolores, eos itaque magni omnis quisquam reprehenderit voluptatum!
                                            <br/>

                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="font-weight-bolder mb-3 antelope-green h6-responsive"><strong>Facilities</strong></h6>
                                        <ul className="list-group">
                                            <li className="list-group-item">Cras justo odio</li>
                                            <li className="list-group-item">Dapibus ac facilisis in</li>
                                            <li className="list-group-item">Morbi leo risus</li>
                                            <li className="list-group-item">Porta ac consectetur ac</li>
                                            <li className="list-group-item">Vestibulum at eros</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={'p-4 mt-4 antelope-green-bg-light-outline  white-text'}>
                            <h4> Price : 1400/day
                                <button className={'btn btn-sm btn-danger float-right'}>Book Now</button>
                            </h4>
                        </div>

                        <HotelsLocation/>
                    </div>

                    <div className="col-sm-12 col-md-3 p-5 px-2">

                        <Link to={'/blogs'}>
                            Other Popular Treks in this are
                        </Link>
                        <StickyBox offsetTop={100}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body grey-text ">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title antelope-green">
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

export default Trek;