import React, {useState} from 'react';
import FsLightbox from 'fslightbox-react';
import Pokhara from '../../assets/images/pokhara.jpg';
import kathmandu from '../../assets/images/kathmandu.jpeg';
import chitwan from '../../assets/images/chitwan.jpg';
import aboutUs from '../../assets/images/aboutUs.jpg';
import carefree from '../../assets/images/carefree.png';
import notFound from '../../assets/images/notFound.png';


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
            <div className={'container-fluid p-5 w-100'}>
                <h3 className={`h3-responsive h3-lg antelope-green text-center font-weight-bold  primary-font`}>YOUR JOURNEY WITH US.</h3>
                <h5 className={`h5-responsive h5-lg text-center font-weight-bold secondary-text`}>See the memories you've made</h5>
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
        </div>
    )
};

export default Gallery;