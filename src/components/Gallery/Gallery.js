import React from 'react';

const Gallery = () => {

    const getRandomSize = (max, min) => {
        return Math.round(Math.random() * (max - min) + min);
    };

    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className={''}>
            <div className={'container-fluid p-5 w-100'}>
                <h1 className={`h1-responsive h1-lg antelope-green text-center font-weight-bold font-poppins`}>YOUR JOURNEY WITH US.</h1>
                <h5 className={`h5-responsive h5-lg text-center font-weight-bold font-libre-franklin`}>See the memories you've made</h5>
                <br/>
                <div className={'container'}>
                    <div className="gallery" id="gallery">
                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                                 alt="Card image cap" /> 
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain1.jpg"
                                 alt="Card image cap" /> 
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg"
                                 alt="Card image cap" /> 
                        </div>

                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                 alt="Card image cap" /> 
                        </div>

                        <div className="mb-3 pics animation all 2">
                            <img className="img-fluid"
                                 src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                 alt="Card image cap" /> 
                        </div>

                        <div className="mb-3 pics animation all 1">
                            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain3.jpg"
                                 alt="Card image cap" /> 
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
};

export default Gallery;