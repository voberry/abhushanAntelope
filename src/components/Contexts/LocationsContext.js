import React, {createContext, useState} from 'react'

export const LocationsContext = createContext();

export const LocationsContextProvider = props => {

    const [selectedHotel, setSelectedHotel] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

    const handleSelectedHotel = (hotel, location) => {
        let tempData = [...selectedHotel];
        if(tempData.indexOf(location) === -1)
        {
            tempData.push({
                hotel: hotel,
                location: location
            });
        }
        else {
            let itemIndex = tempData.find(item => item.location === location);
            tempData[itemIndex].hotel = hotel;
        }
        setSelectedHotel(tempData)
    };

    const handleSelectedVehicle = (vehicles,location) => {
        let tempData = [...selectedVehicle];
        if(tempData.indexOf(location) === -1)
        {
            tempData.push({
                vehicle: vehicles,
                location: location
            });
        }
        else {
            let itemIndex = tempData.find(item => item.location === location);
            tempData[itemIndex].vehicle = vehicles;
        }
        setSelectedVehicle(tempData)
    };

    const handleSelectedRestaurants = (rests, location) => {
        let tempData = [...selectedRestaurants];
        if(tempData.indexOf(location) === -1)
        {
            tempData.push({
                restaurant: rests,
                location: location
            });
        }
        else {
            let itemIndex = tempData.find(item => item.location === location);
            tempData[itemIndex].restaurant = rests;
        }
        setSelectedRestaurants(tempData)
    };

    return (
        <LocationsContext.Provider  value={{
            selectedHotel : selectedHotel,
            selectedVehicle: selectedVehicle,
            selectedRestaurants: selectedRestaurants,
            handleSelectedHotel: (hotel, location) => handleSelectedHotel(hotel, location),
            handleSelectedVehicle: (vehicles, location) => handleSelectedVehicle(vehicles, location),
            handleSelectedRestaurants: (rests, location) => handleSelectedRestaurants(rests, location),
        }}>
            {props.children}
        </LocationsContext.Provider>
    );
};


export default LocationsContextProvider