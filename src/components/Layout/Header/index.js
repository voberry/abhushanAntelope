import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import {MDBNavbar, MDBNavbarBrand} from 'mdbreact'

import logo from '../../../assets/images/carefree.png'

const AppHeader = () => {
    return (
        <div>
            <MDBNavbar transparent dark expand="md" fixed="top">
                <div className="container">
                    <div className="d-flex flex-fill w-100 justify-content-center">
                        <div>
                            <ul className="nav justify-content-end lighten-4 py-3">
                                <Link className="nav-link px-4 white-text" to="/our-services">
                                    Our Services
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/gallery">
                                    Gallery
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/about">
                                    About
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <MDBNavbarBrand className={'nav justify-content-center lighten-4'}>
                                <img src={logo} className={'rounded-circle img-fluid'} style={{
                                    position: "absolute",
                                    height: '100px',
                                    background: 'white'
                                }} alt=""/>
                            </MDBNavbarBrand>
                        </div>
                        <div >
                            <ul className="nav justify-content-start lighten-4 py-3">
                                <Link className="nav-link px-4 white-text" to="/our-services">
                                    Blog
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/gallery">
                                    Contact
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/about">
                                    Login
                                </Link>
                                <Link className="nav-link px-4 white-text" to="/about">
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