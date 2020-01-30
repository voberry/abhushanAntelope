import React, {useState} from 'react';
import FsLightbox from 'fslightbox-react';
import Pokhara from '../../assets/images/pokhara.jpg';
import kathmandu from '../../assets/images/kathmandu.jpeg';
import chitwan from '../../assets/images/chitwan.jpg';
import aboutUs from '../../assets/images/aboutUs.jpg';
import carefree from '../../assets/images/carefree.png';
import notFound from '../../assets/images/notFound.png';
import HotelBG from "../../assets/images/hotels.jpg";
import {MDBAnimation} from "mdbreact";


const Gallery = () => {
    const [state, setState] = useState({
        isVisible : false,
        slide: 0
    })

    const showSlide = (slide) => {
        setState({
            isVisible: !state.isVisible,
            slide: slide
        });
    };


    return (
        <div>
            <MDBAnimation type="fadeIn" duration="1s">
                <div
                    style={{
                        height: "100%",
                    }}
                >
                    <div
                        className="non-home-view intro-2"
                        style={{ backgroundImage: `url(${HotelBG})` }}
                    >
                        <div className="full-bg-image-not-home">
                            <div className="mask rgba-black-light flex-start-end p-5">
                                <h1 className='white-text text-uppercase'>Hotels</h1>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={'container-fluid p-5 w-100'}>
                <h3 className={`h3-responsive h3-lg antelope-green text-center font-weight-bolder  primary-font`}>YOUR JOURNEY WITH US.</h3>
                <h5 className={`h5-responsive h5-lg text-center font-weight-bolder secondary-text`}>See the memories you've made</h5>
                <br/>
                <div className={'container'}>
                    <FsLightbox
                        toggler={state.isVisible}
                        slide={state.slide}
                        sources={[
                            Pokhara,
                            chitwan,
                            kathmandu,
                            aboutUs,
                            carefree,
                            notFound
                        ] }
                    />
                    <div className="gallery" id="gallery">
                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(1)}
                                 src={Pokhara}
                                 alt="Card image cap" />
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(2)}
                                 src={kathmandu}
                                 alt="Card image cap" />
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(3)}
                                 src={chitwan}
                                 alt="Card image cap" />
                        </div>

                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(4)}
                                 src={aboutUs}
                                 alt="Card image cap" />
                        </div>

                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(5)}
                                 src={carefree}
                                 alt="Card image cap" />
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid"
                                 onClick={()=> showSlide(6)}
                                 src={notFound}
                                 alt="Card image cap" />
                        </div>

                    </div>
                </div>

            </div>
            </MDBAnimation>
        </div>
    )
};

export default Gallery;