import React, {createContext, useState} from 'react'

export const LocationsContext = createContext();

export const LocationsContextProvider = props => {

    const [selectedHotel, setSelectedHotel] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedRestaurants, setSelectedRestaurants] = useState(null);

    const handleSelectedHotel = (hotel) => {setSelectedHotel(hotel)
    };

    const handleSelectedVehicle = (vehicles) => {
        setSelectedVehicle(vehicles)
    };

    const handleSelectedRestaurants = (rests) => {
        console.log(rests)
        setSelectedRestaurants(rests)
    };

    return (
        <LocationsContext.Provider  value={{
            selectedHotel : selectedHotel,
            selectedVehicle: selectedVehicle,
            selectedRestaurants: selectedRestaurants,
            handleSelectedHotel: (hotel) => handleSelectedHotel(hotel),
            handleSelectedVehicle: (vehicles) => handleSelectedVehicle(vehicles),
            handleSelectedRestaurants: (rests) => handleSelectedRestaurants(rests),
        }}>
            {props.children}
        </LocationsContext.Provider>
    );
};


export default LocationsContextProvider