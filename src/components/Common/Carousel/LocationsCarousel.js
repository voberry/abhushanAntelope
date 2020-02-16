import React, {useContext, useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LocationsContext} from "../../Contexts/LocationsContext";
import {chunkArrays} from "../../../utils/commonUtil";

const Carousels = (props) => {
    const {selectedItemFor, locations} = props;
    const locationContextData = useContext(LocationsContext);
    const {handleSelectedHotel, handleSelectedVehicle, handleSelectedRestaurants, selectedHotel} = locationContextData;

    const [carouselData, setCarouselData] = useState(null);
    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    useEffect(() => {
        let tempArray = chunkArrays(arrayData, 6);
        setCarouselData(tempArray);
    }, []);

    const nextItemButton =
        <button className={'btn antelope-green-bg btn-sm mt-3'}>
            <i className={'fas fa-chevron-right'}/>
        </button>;

    const previousItemButton =
        <button className={'btn antelope-green-bg btn-sm mt-3'}>
            <i className={'fas fa-chevron-left'}/>
        </button>;

    return (
        <div className={'multi-carousel'}>
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton}
                      interval={null}>
                {carouselData && carouselData.map((item) => <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center w-100" style={{
                            flexWrap: 'wrap'
                        }}>
                            {item.map((it) =>
                                <div className="view overlay hoverable-card">
                                    <div className="carousel-container"
                                         onClick={() => selectedItemFor === 'hotel' ? handleSelectedHotel(it, locations.title)
                                             : selectedItemFor === 'restaurants' ? handleSelectedRestaurants(it, locations.title)
                                                 : handleSelectedVehicle(it, locations.title)}>
                                        <img
                                            src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                            alt="Snow"
                                            className={'carousel-images-size'}
                                        />
                                        <div className="carousel-bottom-left ">Bottom Left</div>
                                        <div className="carousel-top-right">5</div>
                                        <div className="carousel-text-center">
                                            Hotel Name
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
            {/*<div className={`card mx-2 mb-2 ${selectedHotel && selectedHotel[0]*/}
            {/*&& it === selectedHotel[0].hotel ? 'antelope-green-bg-light white-textwhite-text' : 'white'}`}>*/}
            {/*    <div className="view overlay">
            {/*        <img className="card-img-top h-300 carousel-images-size"*/}
            {/*             */}
            {/*             alt="Card image cap"/>*/}
            {/*        <a>*/}
            {/*            <div className="mask rgba-black-strong flex-center">*/}
            {/*                <div>*/}
            {/*                    <h4 className="white-text primary-font">Hotel Name</h4>*/}
            {/*                    <h6 className={'white-text antelope-green'}>*/}
            {/*                        <Link to="/#" target="_blank">*/}
            {/*                            Read More*/}
            {/*                        </Link>*/}
            {/*                    </h6>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
};

export default Carousels;