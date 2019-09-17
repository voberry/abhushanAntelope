import React from 'react';
import {Carousel} from "react-bootstrap";

const Carousels = () => {
    const nextItemButton =
        <button className={'btn btn-success btn-sm mt-3'}>
            <i className={'fas fa-chevron-right'} />
        </button>;

    const previousItemButton =
        <button className={'btn btn-success btn-sm mt-3'}>
            <i className={'fas fa-chevron-left'} />
        </button>;


    return (
        <div>
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton}>
                <Carousel.Item>
                    <div className="d-flex justify-content-around align-items-center w-100">

                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>


                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around align-items-center w-100">
                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>


                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-around align-items-center w-100">
                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>


                        <div className="card mx-4">
                            <div className="view overlay">
                                <img className="card-img-top"
                                     src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Button</a>

                            </div>

                        </div>

                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carousels;