import React, {Component} from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import '../../../index.css'
export default class MinHeader extends Component {
    render(){
        return(
            <div>
                <MDBNavbar color="unique-color-dark" dark className={'p-0'}>
                    <MDBNavbarBrand className={'w-100 text-center font-weight-bolder' }>
                            <span className={'main-nav-text'}>  Interviews for Assistant Manager </span><span className={'sub-nav-text'}>Acme Boston</span>
                    </MDBNavbarBrand>
                </MDBNavbar>
            </div>
        )
    }
}