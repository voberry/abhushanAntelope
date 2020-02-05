import React, {useContext, useEffect, useState} from 'react';
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
import {isUserLoggedIn} from "../../../utils/jwtUtil";
import {AuthContext} from "./AuthContext";
import {getLocalStorage} from "../../../utils/storageUtil";

const AppHeader = props => {
    const authData = useContext(AuthContext);
    const {userData, displayLoginModal, disableLoginModal} = authData;
    const getFirstUserPhoto = getLocalStorage('userPicture');
    const [isSelectedPages, setIsSelectedPages] = useState(false);

    const showLoginModal = () => {
        displayLoginModal()
    };

    const hideLoginModal = () => {
        disableLoginModal()
    };

    useEffect(() => {
        console.log(window.location.pathname === `/our-services/treks`)
        if (props.match.url === '/contact-us'
         || props.match.url === '/blogs'
         || props.match.url === '/gallery') {
            setIsSelectedPages(true)
        } else {
            setIsSelectedPages(false)
        }
    }, [props.match]);

    const LoginModalProps = {
        showModal: showLoginModal,
        hideModal: hideLoginModal,
        isModalVisible: authData.isLoginModalVisible
    };

    return (
        <div>
            <MDBNavbar expand="md" fixed="top" scrolling
                        style={{boxShadow: ' 0 0 transparent'}}
                        transparent={!isSelectedPages}
                        color={isSelectedPages ? 'elegant-color-dark' : 'transparent'}
                        className="p-0"
                        >
                {/* transparent={props.match.url === '/'}  color={props.match.url !== '/' && 'elegant-color-dark'}*/}
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5'}>
                            <ul className="nav justify-content-end lighten-4 py-4 nav-texts">
                                <MDBNavItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle nav>
                                            <span className="mr-2 nav-text-span">Our Services</span>
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
                                <Link className="nav-link px-4" to="/gallery">
                                    Gallery
                                </Link>
                                <Link className="nav-link px-4" to="/about-us">
                                    About
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <MDBNavbarBrand className={'nav justify-content-center lighten-4 mr-0 nav-header'}>
                                <Link to={'/'} className={'brand-image'}>
                                    <img src={logo} className={' img-fluid '} alt="" style={{
                                            paddingLeft: '10px',
                                            paddingRight: '10px',
                                            background: '#fbfbfbd6'
                                    }}/>
                                </Link>
                            </MDBNavbarBrand>
                        </div>
                        <div className={'ml-5'}>
                            <ul className="nav justify-content-start lighten-4 py-4 nav-texts">
                                <Link className="nav-link px-4" to="/blogs">
                                    Blog
                                </Link>
                                <Link className="nav-link px-4" to="/contact-us">
                                    Contact
                                </Link>
                                {isUserLoggedIn() ?
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav>
                                                <img
                                                    src={(userData && userData.userPicture) || getFirstUserPhoto } alt="Avatar"
                                                    style={{height: '30px', width: '30px', borderRadius: '50%'}}/>
                                                <span
                                                    className="ml-2 nav-text-span">{(userData && userData.userName) || getLocalStorage('userName')}</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem>
                                                    <Link to="/users">
                                                        Profile
                                                    </Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <a onClick={authData.logout}>
                                                        SignOut
                                                    </a>
                                                </MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    : <a className="nav-link px-4" onClick={() => showLoginModal()}>
                                        Join Us
                                    </a>}

                            </ul>
                        </div>
                    </div>
                </div>
            </MDBNavbar>

            <LoginModal modalProps={LoginModalProps}/>
        </div>
    );
};

export default withRouter(AppHeader);