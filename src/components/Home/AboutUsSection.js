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
            <section className="p-5">
                <MDBRow className={'w-100 p-5'}>
                    <MDBCol lg="6" className="text-center text-lg-left p-5" style={{
                        position: 'relative'
                    }}>
                        <img
                            src={antelope}
                            alt=""
                            className={'w-100'}
                        />
                        <div style={{
                            position: 'absolute',
                            height: '200',
                            weight: '200'
                        }}/>
                    </MDBCol>

                    <MDBCol lg="6" className={'px-5 d-flex justify-content-center align-items-center'}>
                        <div>
                            <h6 className="h6-responsive mt-5 green-text text-uppercase">Change the way you
                                travel!</h6>
                            <h2 className="h2-responsive font-weight-bolder mb-5 antelope-green primary-font">
                                We are Antelope Nepal
                            </h2>

                            <h6 className={'h6-responsive font-weight-300 grey-text'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias doloribus eaque earum eos esse et facere hic illo labore laudantium minima
                                molestias
                                provident,
                                quo reiciendis sequi similique tempora voluptas voluptate.
                            </h6>

                            <Link to={'/about-us'}>
                                <button className={'btn btn-sm antelope-green-bg-light-outline  white-text'}>

                                    Read More
                                </button>
                            </Link>
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>

            <section className="container-fluid d-flex justify-content-around align-items-center px-5 pb-5">
                <div className={'text-center'}>
                    <h1 className="h1-responsive font-weight-bolder my-5 antelope-blue-light text-uppercase">
                        How we work
                    </h1>

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