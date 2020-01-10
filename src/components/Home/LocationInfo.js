import React, {useContext, useState} from 'react';
import {Tabs} from "antd";
import {LocationsContext} from "../Contexts/LocationsContext";
import Carousels from "../Common/Carousel";
import {Link} from "react-router-dom";
import moment from "moment";
import {MDBIcon, MDBNav, MDBNavItem, MDBNavLink, MDBTabContent, MDBTabPane} from "mdbreact";
import animal from "../../assets/images/animal.png";
import party from "../../assets/images/party.png";
import temple from "../../assets/images/temple.png";

const {TabPane} = Tabs;
const LocationInfo = (props) => {
    const {location, index, form} = props;
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


    const {validateFields, getFieldDecorator} = form;
    const locationContextData = useContext(LocationsContext);
    const {selectedHotel, selectedRestaurants, selectedVehicle} = locationContextData;

    // const handleSetInitialHotel = (location, hotel)

    return (
        <div className={`container-fluid p-5`}>
            <div className="row w-100">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={location.image}
                             alt="Card image cap"/>
                        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                             viewBox="0 0 583 95" style={{
                            marginTop: '-3.7rem',
                            background: 'transparent'
                        }}>
                            <polygon fill={'white'} points="0,52 583,95 0,95"/>
                            <polygon fill={'white'} opacity=".5" points="0,42 583,95 683,0 0,95"/>
                        </svg>
                        <div className={'p-3'}>
                            <h1 className="h1-responsive font-weight-bold antelope-green">
                               {location.title}
                        </h1>

                            <hr/>
                            <h5 className={'h5-responsive font-weight-300 grey-text'}>{location && location.description}</h5>

                        </div>
                    </div>
                </div>

                <div className="col-md-8 col-sm-12">
                    <MDBNav tabs className="nav-justified custom-md-tabs">
                        <MDBNavItem>
                            <MDBNavLink
                                to="#"
                                active={state.activeItem === "hotel"}
                                onClick={toggle("hotel")}
                                role="tab"
                            >
                                <MDBIcon icon="user"/> Hotels
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                                to="#"
                                active={state.activeItem === "vehicles"}
                                onClick={toggle("vehicles")}
                                role="tab"
                            >
                                <MDBIcon icon="heart"/> Vehicles
                            </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink
                                to="#"
                                active={state.activeItem === "restaurants"}
                                onClick={toggle("restaurants")}
                                role="tab"
                            >
                                <MDBIcon icon="envelope"/> Restaurant
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent
                        activeItem={state.activeItem}
                    >
                        <MDBTabPane tabId="hotel" role="tabpanel">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="d-flex justify-content-around align-items-center w-100">
                                        <div className={`card mx-2 recommended-item`}>
                                            <div className="view overlay">
                                                <img className="card-img-top h-300 carousel-images-size"
                                                     src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                                     alt="Card image cap"/>
                                                <a>
                                                    <div className="mask rgba-black-strong flex-center">
                                                        <div>
                                                            <h3 className="white-text">Hotel Name</h3>
                                                            <h6 className={'white-text'}>
                                                                <Link to="/#" target="_blank">
                                                                    Read More
                                                                </Link>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <Carousels locations={location} selectedItemFor={'hotel'}/>
                                </div>
                            </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="vehicles" role="tabpanel">
                            <Carousels locations={location} selectedItemFor={'vehicles'}/>
                        </MDBTabPane>
                        <MDBTabPane tabId="restaurants" role="tabpanel">
                            <Carousels locations={location} selectedItemFor={'restaurants'}/>
                        </MDBTabPane>
                    </MDBTabContent>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;