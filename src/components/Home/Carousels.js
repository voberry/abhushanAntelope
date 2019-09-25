import React, {useEffect, useState} from 'react';
import {Carousel} from "react-bootstrap";
import {chunkArrays} from "../../utils/commonUtil";

const Carousels = () => {
    const [carouselData, setCarouselData] = useState(null);
    const arrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    useEffect(()=>{
        let tempArray = chunkArrays(arrayData, 3);
        setCarouselData(tempArray);
    }, []);

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
            <Carousel touch={true} className={'mb-5'} nextIcon={nextItemButton} prevIcon={previousItemButton} interval={null}>
                {carouselData && carouselData.map(item => <Carousel.Item>
                    <div className="d-flex justify-content-around align-items-center w-100">
                        {item.map(it =>  <div className="card mx-2">
                            <div className="view overlay">
                                <img className="card-img-top h-300"
                                     src="https://via.placeholder.com/300.png/09f/fff"
                                     alt="Card image cap"/>
                                <a href="#!">
                                    <div className="mask rgba-white-slight"/>
                                </a>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title font-poppins">Card title</h4>
                                <p className="card-text font-libre-franklin">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <button className="btn btn-primary btn-sm">Button</button>

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