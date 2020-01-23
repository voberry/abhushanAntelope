import React from "react";
import {MDBRow, MDBCol, MDBIcon} from "mdbreact";
import {withRouter, Link} from 'react-router-dom'
import antelope from '../../assets/images/antelope.png'
import search from '../../assets/images/search.png';
import customize from '../../assets/images/customize.png';
import design from '../../assets/images/design.png';
import checkout from '../../assets/images/checkout.png';

const AboutUsSection = () => {
    return (
        <>
            <section className="container-fluid d-flex justify-content-around align-items-center mt-5 px-5 pb-5">
                <div className={'text-center'}>
                    <h2 className="h2-responsive font-weight-bolder my-5 antelope-blue-light text-uppercase">
                        How we work
                    </h2>

                    <MDBRow className={'p-5'}>
                        <MDBCol md="3">
                            <img src={search} className='icon-images-lg' alt=""/>
                            <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">Search</h5>
                            <hr className={'text-center w-25 antelope-green-bg'}/>
                            <p className=" mb-md-0 mb-5 grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <img src={customize} className={'icon-images-lg'} alt=""/>
                            <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase ">Customize</h5>
                            <hr className={'text-center w-25 antelope-green-bg'}/>
                            <p className="mb-md-0 mb-5 grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <img src={design} className={'icon-images-lg'} alt=""/>
                            <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">Design</h5>
                            <hr className={'text-center w-25 antelope-green-bg'}/>
                            <p className="mb-md-0 mb-5 grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <img src={checkout} className={'icon-images-lg'} alt=""/>
                            <h5 className="font-weight-bolder mt-4 mb-2 antelope-blue-light text-uppercase">Checkout</h5>
                            <hr className={'text-center w-25 antelope-green-bg'}/>
                            <p className="mb-md-0 mb-5 grey-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reprehenderit maiores aperiam minima assumenda deleniti hic.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </div>
            </section>

        </>
    );
};

export default withRouter(AboutUsSection);