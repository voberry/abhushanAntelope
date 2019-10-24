import React from 'react';
import StickyBox from "react-sticky-box";
import {Tabs} from "antd";
import Carousels from "../../Common/Carousel";
import Wallpaper from "../../../assets/images/pokhara.jpg";
import districts from '../../../assets/generated-geojson/districts'

const {TabPane} = Tabs;

const Locations = (props) => {

    return (
        <div style={{
            background : '#f2f2f2'
        }}>
            <div style={{
                position: 'relative'
            }}>
                <div className="page-header header-filter" data-parallax="true" style={{
                    backgroundImage: `url(${Wallpaper})`,
                }}/>
                <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '16px',
                    fontSize: '32px',
                    color: 'white',
                    fontWeight: 'bold',
                    background: 'rgba(0,0,0,0.25)',
                    padding: '16px'
                }}>
                    {props.match.params.name}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-sm-12 col-md-9 p-5">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-md-12 p-5">

                                <a  className="green-text">
                                    <h6 className="font-weight-bold mb-3 font-libre-franklin"><i className="fas fa-city pr-2" />City of Temples</h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 font-poppins"><strong>  {props.match.params.name}</strong></h3>

                                <p className={'font-libre-franklin'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus enim eum harum quae tenetur, ullam? Ab adipisci aut culpa earum perspiciatis porro quis quisquam reiciendis velit veritatis, voluptas voluptates?
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi, commodi doloribus magnam magni modi placeat quia quidem sint ut! Asperiores consectetur dolores, eos itaque magni omnis quisquam reprehenderit voluptatum!
                                    <br/>

                                </p>

                            </div>

                            <div className="col-md-12">
                                <div style={{
                                    color: 'white'
                                }}>
                                    <Tabs defaultActiveKey="culture">
                                        <TabPane tab="Culture" key="culture" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab="Heritage" key="heritage" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab="City Life" key="cityLife" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab={`Old ${props.match.params.name}`} key="oldCity" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab="Food" key="food" >
                                            <Carousels/>
                                        </TabPane>
                                        <TabPane tab="Standard Packages" key="standardPackages" >
                                            <Carousels/>
                                        </TabPane>
                                    </Tabs>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 p-5">
                        <StickyBox offsetTop={100}>
                            <div className="row">
                                <div className="col-sm-12 col-md-12">

                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body black-text">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body black-text">
                                            Ad stuff
                                        </div>
                                    </div>
                                    <div className="card mb-3">
                                        <div className="card-title">
                                            <img src={Wallpaper} alt="" className={'w-100'}/>
                                        </div>

                                        <div className="card-body black-text">
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

export default Locations;