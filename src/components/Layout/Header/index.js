import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {MDBNavbar, MDBNavbarBrand} from 'mdbreact'

import logo from '../../../assets/images/antelope.png'

const AppHeader = () => {
    return (
        <div>
            <MDBNavbar expand="md" fixed="top" className={'white'}>
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div className={'mr-5'}>
                            <ul className="nav justify-content-end lighten-4 py-3">
                                <Link className="nav-link px-4  black-text" to="/our-services">
                                    Our Services
                                </Link>
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
                                <img src={logo} className={' img-fluid '} alt=""/>
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
                                <Link className="nav-link px-4  black-text" to="/about">
                                    Login
                                </Link>
                                <Link className="nav-link px-4  black-text" to="/about">
                                    Sign Up
                                </Link>
                            </ul>
                        </div>
                    </div>

                </div>
            </MDBNavbar>
        </div>
    );
};

export default withRouter(AppHeader);