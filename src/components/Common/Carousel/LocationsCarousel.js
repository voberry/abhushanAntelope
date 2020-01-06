import React, {useContext, useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {LocationsContext} from "../../Contexts/LocationsContext";
import {chunkArrays} from "../../../utils/commonUtil";

const Carousels = (props) => {
    const {selectedItemFor, locations} = props;
    const locationContextData = useContext(LocationsContext);
    const { handleSelectedHotel, handleSelectedVehicle, handleSelectedRestaurants, selectedHotel} = locationContextData;

    const [carouselData, setCarouselData] = useState(null);
    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        let tempArray = chunkArrays(arrayData, 4);
        setCarouselData(tempArray);
    }, []);

    const nextItemButton =
        <button className={'btn antelope-green-bg-light   btn-sm mt-3'}>
            <i className={'fas fa-chevron-right'}/>
        </button>;

    const previousItemButton =
        <button className={'btn antelope-green-bg-light btn-sm mt-3'}>
            <i className={'fas fa-chevron-left'}/>
        </button>;


    return (
        <div className={'multi-carousel'}>
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton}
                      interval={null}>
                {carouselData && carouselData.map((item) => <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center w-100">
                            {item.map((it) => <div className={`card mx-2 ${selectedHotel && selectedHotel[0] && it=== selectedHotel[0].hotel ? 'antelope-green-bg-light  white-text' : 'white'}`}>
                                <div className="view overlay">
                                    <img className="card-img-top h-300"
                                         style={{
                                             height: '200px',
                                             width : 'auto'
                                         }}
                                         src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                         alt="Card image cap"/>
                                    <a>
                                        <div className="mask rgba-white-slight"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h3 className="card-title h3">Something</h3>
                                    <p className=" secondary-text">Some quick example text</p>
                                    { selectedItemFor === 'hotel' &&  <button className={`btn antelope-green-bg-light btn-sm`} onClick={()=> handleSelectedHotel(it, locations.title)}>Button</button> }
                                    { selectedItemFor === 'restaurants' && <button className="btn antelope-green-bg-light btn-sm" onClick={()=> handleSelectedRestaurants(it, locations.title)}>Button</button>}
                                    { selectedItemFor === 'vehicles' && <button className="btn antelope-green-bg-light btn-sm" onClick={()=> handleSelectedVehicle(it, locations.title)}>Button</button>}
                                </div>
                            </div>)}
                        </div>
                    </Carousel.Item>
                )}

            </Carousel>
        </div>
    );
};

export default Carousels;