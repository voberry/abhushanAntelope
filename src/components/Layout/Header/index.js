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
                                        <MDBNavItem active>
                                            <NavLink className='nav-link waves-effect waves-light' to="#!">Home</NavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <NavLink className='nav-link waves-effect waves-light' to="#!">Features</NavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <NavLink className='nav-link waves-effect waves-light' to="#!">Pricing</NavLink>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle nav caret>
                                                    <span className="mr-2">Dropdown</span>
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu>
                                                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                                                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBNavItem>
                                    </MDBNavbarNav>
                                    <MDBNavbarNav right>
                                        <MDBNavItem>
                                            <MDBFormInline waves>
                                                <div className="md-form my-0">
                                                    <input className="form-control mr-sm-2" type="text"
                                                           placeholder="Search" aria-label="Search"/>
                                                </div>
                                            </MDBFormInline>
                                        </MDBNavItem>
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