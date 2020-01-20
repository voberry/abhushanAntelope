import React, {useContext, useState} from 'react';
import {Tabs} from "antd";
import {LocationsContext} from "../Contexts/LocationsContext";
import Carousels from "../Common/Carousel";
const {TabPane} = Tabs;

const LocationInfo = (props) => {
    const {location, index, form} = props;
    const { getFieldDecorator } = form;
    const [state, setState] = useState({
        activeItem: "hotel"
    });

    const toggle = tab => () => {
        if (state.activeItem !== tab) {
            setState({
                activeItem: tab
            });
        }
    };


    const locationContextData = useContext(LocationsContext);
    const {selectedHotel, selectedRestaurants, selectedVehicle} = locationContextData;

    // const handleSetInitialHotel = (location, hotel)

    return (
        <div className="d-flex justify-content-around flex-fill mx-5">
            <div className="row w-100">
                <div className="col-sm-12 col-md-9">
                    <div>
                        <section className="my-5 ">
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
                                        <h6 className="font-weight-bolder mb-3 antelope-blue-light  "><i
                                            className="fas fa-city pr-2"/>City of Temples</h6>
                                    </a>
                                    <h3 className="font-weight-bolder mb-3 antelope-green text-uppercase">
                                        <strong>{location && location.title}</strong></h3>

                                    <p className={'secondary-text'}>{location && location.description}</p>

                                    <br/>
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
                    <div className="card mt-5 flat-box-shadow">
                        <div className="card-body">
                            <h3 className="card-title antelope-green primary-font">{location.title} Packages</h3>

                            <hr/>

                            {selectedHotel && selectedHotel.map(item => item.location).includes(location.title) &&
                            <div>
                                {getFieldDecorator(`locationInformation['${location.title}']['hotel']`, {
                                    initialValue: selectedHotel && selectedHotel.find(item => item.location === location.title)
                                        && selectedHotel.find(item => item.location === location.title).hotel,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a hotel for ${location.title} `
                                        }
                                    ]
                                })(<div/>)}
                                <h4 className="card-title antelope-green primary-font">Hotel {selectedHotel.hotel}</h4>
                                <h6 className={'antelope-blue-light'}>Location, City</h6>
                                <div>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'far fa-star yellow-text'}/>

                                    <span className={'text-muted ml-2'}>(15 reviews)</span>
                                </div>
                                <span className={'pr-2'}>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-search'}/>
                                            </button>
                                        </span>
                                <span>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-trash'}/>
                                            </button>
                                    </span>

                                <hr/>
                            </div>
                            }



                            {selectedVehicle && selectedVehicle.map(item => item.location).includes(location.title) &&
                            <div>
                                {getFieldDecorator(`locationInformation['${location.title}']['vehicle']`, {
                                    initialValue: selectedVehicle && selectedVehicle.find(item => item.location === location.title)
                                        && selectedVehicle.find(item => item.location === location.title).vehicle,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a vehicle for ${location.title} `
                                        }
                                    ]
                                })(<div/>)}
                                <h4 className="card-title antelope-green primary-font">Vehicle {selectedVehicle.vehicle}</h4>
                                <h6 className={'antelope-blue-light'}>Type</h6>
                                <span className={'pr-2'}>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-search'}/>
                                            </button>
                                        </span>
                                <span>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-trash'}/>
                                            </button>
                                    </span>

                                <hr/>
                            </div>
                            }

                            {selectedRestaurants && selectedRestaurants.map(item => item.location).includes(location.title) &&
                            <div>
                                {getFieldDecorator(`locationInformation['${location.title}']['restaurant']`, {
                                    initialValue: selectedRestaurants && selectedRestaurants.find(item => item.location === location.title)
                                        && selectedRestaurants.find(item => item.location === location.title).restaurant,
                                    rules: [
                                        {
                                            required: true,
                                            message: `Please select a restaurant for ${location.title} `
                                        }
                                    ]
                                })(<div/>)}
                                <h4 className="card-title antelope-green primary-font">Restaurant {selectedRestaurants.restaurant}</h4>
                                <h6 className={'antelope-blue-light'}>Location, City</h6>
                                <div>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'fas fa-star yellow-text'}/>
                                    <i className={'far fa-star yellow-text'}/>

                                    <span className={'text-muted ml-2'}>(15 reviews)</span>
                                </div>
                                <span className={'pr-2'}>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-search'}/>
                                            </button>
                                        </span>
                                <span>
                                            <button className={'btn btn-sm flat-box-shadow'}>
                                                <i className={'fas fa-trash'}/>
                                            </button>
                                    </span>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;