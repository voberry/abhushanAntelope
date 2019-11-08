import React, {createContext, useState} from 'react'
import {isEmpty} from "../../utils/commonUtil";

export const LocationsContext = createContext();

export const LocationsContextProvider = props => {

    const [selectedHotel, setSelectedHotel] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState([]);
    const [selectedRestaurants, setSelectedRestaurants] = useState([]);

    const handleSelectedHotel = (hotel, location) => {
        let tempData = [...selectedHotel];
        if(isEmpty(tempData.filter(item => item.location === location)))
        {
            tempData.push({
                hotel: hotel,
                location: location
            });
        }
        else {
            let itemIndex = tempData.findIndex(item => item.location === location);
            if(tempData && tempData[itemIndex])
            {
                tempData[itemIndex].hotel = hotel;
            }
        }
        setSelectedHotel(tempData)
    };

    const handleSelectedVehicle = (vehicles,location) => {
        let tempData = [...selectedVehicle];
        if(isEmpty(tempData.filter(item => item.location === location)))
        {
            tempData.push({
                vehicle: vehicles,
                location: location
            });
        }
        else {
            let itemIndex = tempData.findIndex(item => item.location === location);
            if(tempData && tempData[itemIndex]) {
                tempData[itemIndex].vehicle = vehicles;
            }
        }
        setSelectedVehicle(tempData)
    };

    const handleSelectedRestaurants = (rests, location) => {
        let tempData = [...selectedRestaurants];
        if(isEmpty(tempData.filter(item => item.location === location)))
        {
            tempData.push({
                restaurant: rests,
                location: location
            });
        }
        else {
            let itemIndex = tempData.findIndex(item => item.location === location);
            if(tempData && tempData[itemIndex]) {
                tempData[itemIndex].restaurant = rests;
            }
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