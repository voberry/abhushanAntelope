import React, {useEffect, useState} from 'react';
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

const AppHeader = props => {

    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);

    const showLoginModal = () => {
        setIsLoginModalVisible(true)
    };
    const hideLoginModal = () => {
        setIsLoginModalVisible(false)
    };

    useEffect(()=> {
        if(props.match.url === '/'){
            setIsHomePage(true)
        }
        else{
            setIsHomePage(false)
        }
    }, [props.match])

    const LoginModalProps = {
        showModal: showLoginModal,
        hideModal : hideLoginModal,
        isModalVisible: isLoginModalVisible
    };

    return (
        <div>
            <MDBNavbar expand="md" fixed="top" scrolling transparent={props.match.url === '/'} color={props.match.url !== '/' && 'elegant-color-dark'}>
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5'}>
                            <ul className="nav justify-content-end lighten-4 py-3">
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <span className="mr-2 white-text">Our Services</span>
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
                                <Link className="nav-link px-4  white-text" to="/gallery">
                                    Gallery
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/about-us">
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
                        <div className={'ml-5'}>
                            <ul className="nav justify-content-start lighten-4 py-3">
                                <Link className="nav-link px-4  white-text" to="/blogs">
                                    Blog
                                </Link>
                                <Link className="nav-link px-4  white-text" to="/contact-us">
                                    Contact
                                </Link>
                                <a className="nav-link px-4  white-text" onClick={()=> showLoginModal()}>
                                    Join Us
                                </a>
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