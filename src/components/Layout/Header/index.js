import React, {Component} from 'react';
import {BrowserRouter as Router, withRouter, Link, NavLink} from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

import {AuthConsumer} from './AuthContext';
import {getLocalStorage, setLocalStorage} from '../../../utils/storageUtil';

class AppHeader extends Component {

    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const pathName = window.location.pathname;
        return (
            <React.Fragment>
                <header>
                    <AuthConsumer>
                        {({isAuthenticated, logout, goToDashboard}) => (
                            <MDBNavbar color="unique-color-dark" fixed='top' dark expand="md" scrolling>
                                <MDBNavbarBrand>
                                    <Link to='/'>
                                    <strong className="white-text">Navbar</strong>
                                    </Link>
                                </MDBNavbarBrand>
                                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                                    <MDBNavbarNav left>
                                        <MDBNavItem>
                                            <NavLink className='nav-link waves-effect waves-light' to="#!">Home</NavLink>
                                        </MDBNavItem>

                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <React.Fragment>
                                            <Link to={`/signup`} className="btn btn-sm btn-info">Sign up <span className="d-none d-md-inline">for Free</span></Link>
                                            <NavLink className='nav-link waves-effect waves-light' to="/login">Login</NavLink>
                                        </React.Fragment>
                                    </MDBNavbarNav>
                                </MDBCollapse>
                            </MDBNavbar>
                        )}
                    </AuthConsumer>
                </header>
            </React.Fragment>
        )

    }
}

export default withRouter(AppHeader);