import React from 'react';
import Kathmandu from "../../assets/images/kathmandu.jpeg";
import {MDBCol, MDBRow} from "mdbreact";
import antelope from "../../assets/images/antelope.png";

const Index = () => {
    return (
        <div>
            <div className="page-header header-filter" data-parallax="true" style={{
                backgroundImage: `url(${Kathmandu})`,
            }}/>

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
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>
        </div>
    );
};

export default Index;