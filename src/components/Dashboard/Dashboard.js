import React, {Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";

export default class Dashboard extends Component{
    state = {
        collapsed: false
    };

    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div id="apppage">
                    <div>
                <MDBView>
                    <MDBMask className=" mt-5 pt-5 d-flex justify-content-center align-items-center gradient">
                        <MDBContainer>
                            <MDBRow>
                                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                                    <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                        Make purchases with our app{" "}
                                    </h1>
                                    <hr className="hr-light" />
                                    <h6 className="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                        molestiae iste.
                                    </h6>
                                    <MDBBtn color="white">Download</MDBBtn>
                                    <MDBBtn outline color="white">
                                        Learn More
                                    </MDBBtn>
                                </div>
                                <MDBCol md="6" xl="5" className="mt-xl-5">
                                    <img
                                        src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBMask>
                </MDBView>

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                    </div></div>
        );
    }
}