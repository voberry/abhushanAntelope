import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Pokhara from '../../assets/images/pokhara.jpg'

const AboutUsSection = () => {
    return (
        <section className="">
            <MDBRow className={'w-100'}>
                <MDBCol lg="6" className="text-center text-lg-left">
                    <img
                        className="img-fluid h-100"
                        src={Pokhara}
                        alt=""
                    />
                </MDBCol>

                <MDBCol lg="6" className={'px-5'}>
                    <h3 className="h3-responsive text-center my-5">We've arrived. And we're changing the way you travel!</h3>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        We are Antelope Nepal
                    </h2>
                    <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                    </p>

                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Safety</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Technology</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="mb-3">
                        <MDBCol size="1">
                            <MDBIcon icon="share" size="lg" className="indigo-text" />
                        </MDBCol>
                        <MDBCol xl="10" md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Finance</h5>
                            <p className="grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                enim ad minima veniam, quis nostrum exercitationem ullam.
                                Reprehenderit maiores aperiam assumenda deleniti hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default AboutUsSection;