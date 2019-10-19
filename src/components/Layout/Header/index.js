import React, {useState} from 'react';
import {withRouter, Link} from 'react-router-dom'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavItem,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle
} from 'mdbreact'

import logo from '../../../assets/images/antelope.png'
import LoginModal from "./LoginModal";

const AppHeader = () => {

    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

    const showLoginModal = () => {
        setIsLoginModalVisible(true)
    };
    const hideLoginModal = () => {
        setIsLoginModalVisible(false)
    };

    const LoginModalProps = {
        showModal: showLoginModal,
        hideModal : hideLoginModal,
        isModalVisible: isLoginModalVisible
    };

    return (
        <div>
            <MDBNavbar expand="md" fixed="top" className={'white'}>
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5'}>
                            <ul className="nav justify-content-end lighten-4 py-3">
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav caret>
                                            <span className="mr-2 black-text">Our Services</span>
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem>
                                                <Link to="/our-services/places">
                                                    Places
                                                </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                                <Link to="/our-services/packages">
                                                    Packages
                                                </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                                <Link to="/our-services/hotels">
                                                    Hotels
                                                </Link>
                                            </MDBDropdownItem>
                                            <MDBDropdownItem>
                                                <Link to="/our-services/treks">
                                                    Treks
                                                </Link>
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavItem>
                                <Link className="nav-link px-4  black-text" to="/gallery">
                                    Gallery
                                </Link>
                                <Link className="nav-link px-4 black-text" to="/about">
                                    About
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <MDBNavbarBrand className={'nav justify-content-center lighten-4 mr-0 nav-header'}>
                                <Link to={'/'}>
                                    <img src={logo} className={' img-fluid '} alt=""/>
                                </Link>
                            </MDBNavbarBrand>
                        </div>
                        <div className={'ml-5'}>
                            <ul className="nav justify-content-start lighten-4 py-3">
                                <Link className="nav-link px-4  black-text" to="/our-services">
                                    Blog
                                </Link>
                                <Link className="nav-link px-4  black-text" to="/gallery">
                                    Contact
                                </Link>
                                <a className="nav-link px-4  black-text" onClick={()=> showLoginModal()}>
                                    Login
                                </a>
                                <Link className="nav-link px-4  black-text" to="/register">
                                    Sign Up
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </MDBNavbar>

            <LoginModal  modalProps={LoginModalProps} />
        </div>
    );
};

export default withRouter(AppHeader);