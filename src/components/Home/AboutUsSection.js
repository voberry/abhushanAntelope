import React from "react";
import {MDBRow, MDBCol} from "mdbreact";
import antelope from '../../assets/images/antelope.png'

const AboutUsSection = () => {
    return (
        <section className="p-5" >
            <MDBRow className={'w-100 p-5'}>
                <MDBCol lg="6" className="text-center text-lg-left p-5" style={{
                    position : 'relative'
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
                        <h6 className="h6-responsive mt-5 green-text font-poppins">Change the way you
                            travel!</h6>
                        <h2 className="h2-responsive font-weight-bold mb-5 font-poppins">
                            We are Antelope Nepal
                        </h2>

                        <h5 className={'h5-responsive font-weight-300 font-libre-franklin dim-grey-text'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias doloribus eaque earum eos esse et facere hic illo labore laudantium minima molestias
                            provident,
                            quo reiciendis sequi similique tempora voluptas voluptate.
                        </h5>

                        <button className={'btn btn-sm antelope-green-bg white-text'}>
                            Read More
                        </button>
                    </div>
                </MDBCol>
            </MDBRow>
        </section>
    );
}

export default AboutUsSection;