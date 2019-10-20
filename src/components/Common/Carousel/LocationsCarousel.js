import React, {useContext, useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {LocationsContext} from "../../Contexts/LocationsContext";
import {chunkArrays} from "../../../utils/commonUtil";

const Carousels = (props) => {
    const {selectedItemFor, locations} = props;
    const locationContextData = useContext(LocationsContext);
    const { handleSelectedHotel, handleSelectedVehicle, handleSelectedRestaurants} = locationContextData;

    const [carouselData, setCarouselData] = useState(null);
    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        let tempArray = chunkArrays(arrayData, 4);
        setCarouselData(tempArray);
    }, []);

    const nextItemButton =
        <button className={'btn btn-success btn-sm mt-3'}>
            <i className={'fas fa-chevron-right'}/>
        </button>;

    const previousItemButton =
        <button className={'btn btn-success btn-sm mt-3'}>
            <i className={'fas fa-chevron-left'}/>
        </button>;


    return (
        <div className={'multi-carousel'}>
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton}
                      interval={null}>
                {carouselData && carouselData.map((item, index) => <Carousel.Item>
                        <div className="d-flex justify-content-around align-items-center w-100">
                            {item.map((it, index2) => <div className="card mx-2">
                                <div className="view overlay">
                                    <img className="card-img-top h-300"
                                         style={{
                                             width: '200px'
                                         }}
                                         src={`https://mdbootstrap.com/img/Photos/Others/images/${Math.floor(Math.random() * 100)}.jpg`}
                                         alt="Card image cap"/>
                                    <a>
                                        <div className="mask rgba-white-slight"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title font-poppins">Something</h4>
                                    <p className="card-text font-libre-franklin">Some quick example text</p>
                                    { selectedItemFor === 'hotel' &&  <button className="btn btn-primary btn-sm" onClick={()=> handleSelectedHotel(it)}>Button</button> }
                                    { selectedItemFor === 'restaurants' && <button className="btn btn-primary btn-sm" onClick={()=> handleSelectedRestaurants(it)}>Button</button>}
                                    { selectedItemFor === 'vehicles' && <button className="btn btn-primary btn-sm" onClick={()=> handleSelectedVehicle(it)}>Button</button>}
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