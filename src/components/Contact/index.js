import React from "react";
import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput} from "mdbreact";
import Pokhara from "../../assets/images/pokhara.jpg";

const ContactPage = () => {
    return (
        <div>
            <div>
                <div className="page-header header-filter" data-parallax="true" style={{
                    backgroundImage: `url(${Pokhara})`,
                    height: '50vh',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}/>
            </div>
            <section className="container-fluid p-5 my-5">
                <h2 className="h1-responsive font-weight-bold text-center mb-5">
                    Contact us
                </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                    error amet numquam iure provident voluptate esse quasi, veritatis
                    totam voluptas nostrum quisquam eum porro a pariatur veniam.
                </p>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header antelope-green-bg-light accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope"/> Write to us:
                                    </h3>
                                </div>
                                <p className="dark-grey-text">
                                    We'll write rarely, but only the best content.
                                </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass={'material-gray'}
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="material-gray"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass={'material-gray'}
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Comments"
                                        iconClass={'material-gray'}
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn className="antelope-green-bg-light white-text">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{height: "400px"}}
                        >
                            <iframe src="https://www.google.com/maps/d/embed?mid=1YeV-CBqH1wi1X9q1UyoHyl-5ais" width="100%" height="100%" />
                        </div>
                        <br/>
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating className="antelope-green-bg-light accent-1">
                                    <MDBIcon icon="map-marker-alt"/>
                                </MDBBtn>
                                <p>New York, 94126</p>
                                <p className="mb-md-0">United States</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating className="antelope-green-bg-light accent-1">
                                    <MDBIcon icon="phone"/>
                                </MDBBtn>
                                <p>+ 01 234 567 89</p>
                                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating className="antelope-green-bg-light accent-1">
                                    <MDBIcon icon="envelope"/>
                                </MDBBtn>
                                <p>info@gmail.com</p>
                                <p className="mb-md-0">sale@gmail.com</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </section>

        </div>

    );
}

export default ContactPage;