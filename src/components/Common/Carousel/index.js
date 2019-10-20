import LocationsCarousel from './LocationsCarousel'
import ServicesCarousels from './ServicesCarousels'

import React from 'react';

const Carousel = props => {
    const { locations } = props;

    return locations  ? <LocationsCarousel {...props} /> : <ServicesCarousels {...props} />;
};

export default Carousel;