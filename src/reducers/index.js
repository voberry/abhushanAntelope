import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import locationReducer from "./locationReducer";
import hotelReducer from "./hotelReducer";

const rootReducer = (state, action) => {

    const appReducer = (history) => combineReducers({
        router: connectRouter(history),
        locations: locationReducer,
        hotels: hotelReducer,
    });

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;