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
import SignUoModal from "./SignUpModal";

const AppHeader = () => {

    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

    const showLoginModal = () => {
        setIsLoginModalVisible(true)
    };
    const hideLoginModal = () => {
        setIsLoginModalVisible(false)
    };

    const showSignUpModal = () => {
        setIsSignUpModalVisible(true)
    };
    const hideSignUpModal = () => {
        setIsSignUpModalVisible(false)
    };

    const LoginModalProps = {
        showModal: showLoginModal,
        hideModal : hideLoginModal,
        isModalVisible: isLoginModalVisible
    };

    const SignUpModalProps = {
        showModal: showSignUpModal,
        hideModal : hideSignUpModal,
        isModalVisible: isSignUpModalVisible
    };

    return (
        <div>
            <MDBNavbar expand="md" fixed="top" scrolling className={'white'}>
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5 hide-when-scrolling'}>
                            <ul className="nav justify-content-end lighten-4 py-3 hide-when-scrolling">
                                <MDBNavItem className={'hide-when-scrolling'}>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <span className="mr-2 black-text hide-when-scrolling">Our Services</span>
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
                                <Link className="nav-link px-4  black-text hide-when-scrolling" to="/gallery">
                                    Gallery
                                </Link>
                                <Link className="nav-link px-4 black-text hide-when-scrolling" to="/about-us">
                                    About
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <MDBNavbarBrand className={'nav justify-content-center lighten-4 mr-0 nav-header'}>
                                <Link to={'/'} className={'brand-image'}>
                                    <img src={logo} className={' img-fluid '} alt=""/>
                                </Link>
                            </MDBNavbarBrand>
                        </div>
                        <div className={'ml-5 hide-when-scrolling'}>
                            <ul className="nav justify-content-start lighten-4 py-3">
                                <Link className="nav-link px-4  black-text hide-when-scrolling" to="/blogs">
                                    Blog
                                </Link>
                                <Link className="nav-link px-4  black-text hide-when-scrolling" to="/contact-us">
                                    Contact
                                </Link>
                                <a className="nav-link px-4  black-text hide-when-scrolling" onClick={()=> showLoginModal()}>
                                    Login
                                </a>
                                <a className="nav-link px-4 black-text hide-when-scrolling"  onClick={()=> showSignUpModal()}>
                                    Sign Up
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </MDBNavbar>

            <LoginModal  modalProps={LoginModalProps} />
            <SignUoModal  modalProps={SignUpModalProps} />

        </div>
    );
};

export default withRouter(AppHeader);