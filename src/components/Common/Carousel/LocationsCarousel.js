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
    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        let tempArray = chunkArrays(arrayData, 3);
        setCarouselData(tempArray);
    }, []);

    const nextItemButton =
        <button className={'btn antelope-green-bg-light-outline btn-sm mt-3'}>
            <i className={'fas fa-chevron-right'}/>
        </button>;

    const previousItemButton =
        <button className={'btn antelope-green-bg-light-outline btn-sm mt-3'}>
            <i className={'fas fa-chevron-left'}/>
        </button>;


    return (
        <div className={'multi-carousel'}>
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton}
                      interval={null}>
                {carouselData && carouselData.map((item) => <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center w-100">
                            {item.map((it) =>
                                <div className={`card mx-2 ${selectedHotel && selectedHotel[0]
                                && it === selectedHotel[0].hotel ? 'antelope-green-bg-light white-text' : 'white'}`}>
                                    <div className="view overlay"
                                         onClick={() => selectedItemFor === 'hotel' ? handleSelectedHotel(it, locations.title)
                                             : selectedItemFor === 'restaurants' ? handleSelectedRestaurants(it, locations.title)
                                                 : handleSelectedVehicle(it, locations.title)}>
                                        <img className="card-img-top h-300 carousel-images-size"
                                             src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                             alt="Card image cap"/>
                                        <a>
                                            <div className="mask rgba-black-strong flex-center">
                                                <div>
                                                <h3 className="white-text">Hotel Name</h3>
                                                <h6 className={'white-text'}>
                                                    <Link to="/#" target="_blank">
                                                    Read More
                                                    </Link>
                                                    </h6>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/*<div className="card-body">*/}
                                    {/*    <h3 className="card-title antelope-green">Something</h3>*/}
                                    {/*    <p className=" secondary-text antelope-blue-light">Some quick example text</p>*/}
                                    {/*</div>*/}
                                </div>)}
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
        </div>
    );
};

export default Carousels;