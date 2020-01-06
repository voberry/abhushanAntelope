import React, {useContext, useState} from 'react';
import {Tabs} from "antd";
import {LocationsContext} from "../Contexts/LocationsContext";
import Carousels from "../Common/Carousel";
import {Link} from "react-router-dom";
import moment from "moment";

const {TabPane} = Tabs;

const LocationInfo = (props) => {
    const {location, index, form} = props;
    const {validateFields, getFieldDecorator} = form;
    const locationContextData = useContext(LocationsContext);
    const {selectedHotel, selectedRestaurants, selectedVehicle} = locationContextData;

    // const handleSetInitialHotel = (location, hotel)

    return (
        <div className={`container-fluid px-5 ${index % 2 !== 0 ? 'gray-background' : 'white'}`}>
            <div className="d-flex justify-content-around flex-fill px-5 mx-5">
                <div className="row w-100">
                    <div className="col-sm-12 col-md-9">
                        <div>
                            <section className="my-5">
                                <div className="row">
                                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                                            <img className="img-fluid"
                                                 src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                                 alt="Sample image"/>
                                            <a>
                                                <div className="mask rgba-white-slight"/>
                                            </a>
                                        </div>

                                    </div>

                                    <div className="col-lg-7 ">
                                        <a className="green-text">
                                            <h6 className="font-weight-bold mb-3 antelope-blue-light main-text"><i
                                                className="fas fa-city pr-2"/>City of Temples</h6>
                                        </a>
                                        <h3 className="font-weight-bold mb-3 antelope-green">
                                            <strong>{location && location.title}</strong></h3>

                                        <h6 className={'gray-text font-Nunito'}>{location && location.description}
                                            <br/>

                                        </h6>
                                    </div>

                                </div>
                            </section>
                        </div>

                        <div>
                            <Tabs defaultActiveKey="hotels">
                                <TabPane tab="Hotels" key="hotels">
                                    <Carousels locations={location} selectedItemFor={'hotel'}/>
                                </TabPane>
                                <TabPane tab="Vehicle Rentals" key="vehicles">
                                    <Carousels locations={location} selectedItemFor={'vehicles'}/>
                                </TabPane>
                                <TabPane tab="Restaurants" key="restaurants">
                                    <Carousels locations={location} selectedItemFor={'restaurants'}/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>


                    <div className="col-sm-12 col-md-3">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title antelope-green" >{location.title} Packages</h3>
                                <p className="card-text antelope-blue-light">Some quick example text to build on the card
                                    title and make up the bulk of the card's content.</p>
                            </div>
                        </div>

                        {selectedHotel && selectedHotel.map(item=> item.location).includes(location.title) &&
                        <div className="card mt-5">
                            <div className="card-body">
                                {getFieldDecorator(`locationInformation['${location.title}']['hotel']`, {
                                    initialValue: selectedHotel && selectedHotel.find(item => item.location === location.title)
                                        && selectedHotel.find(item => item.location === location.title).hotel,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a hotel for ${location.title} `
                                        }
                                    ]
                                })(<div />)}
                                <h3 className="card-title antelope-green">Hotel {selectedHotel.hotel}</h3>
                                <p className="card-text antelope-blue-light">Some quick example text to build on the card
                                    title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        }


                        {selectedVehicle && selectedVehicle.map(item=> item.location).includes(location.title) &&
                        <div className="card mt-5">
                            <div className="card-body">
                                {getFieldDecorator(`locationInformation['${location.title}']['vehicle']`, {
                                    initialValue: selectedVehicle && selectedVehicle.find(item => item.location === location.title)
                                        && selectedVehicle.find(item => item.location === location.title).vehicle,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a vehicle for ${location.title} `
                                        }
                                    ]
                                })(<div />)}
                                <h3 className="card-title antelope-green">Vehicle Rentals :  {selectedVehicle.vehicle}</h3>
                                <p className="card-text antelope-blue-light">Some quick example text to build on the card
                                    title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        }

                        {selectedRestaurants && selectedRestaurants.map(item=> item.location).includes(location.title) &&
                        <div className="card mt-5">
                            <div className="card-body">
                                {getFieldDecorator(`locationInformation['${location.title}']['restaurant']`, {
                                    initialValue: selectedRestaurants && selectedRestaurants.find(item => item.location === location.title)
                                        && selectedRestaurants.find(item => item.location === location.title).restaurant,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a restaurant for ${location.title} `
                                        }
                                    ]
                                })(<div />)}
                                <h3 className="card-title antelope-green">Restaurant:  {selectedRestaurants.restaurant}</h3>
                                <p className="card-text">Some quick example text to build on the card
                                    title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;