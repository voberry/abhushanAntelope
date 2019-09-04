import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import locationReducer from "./locationReducer";

const rootReducer = (state, action) => {

    const appReducer = (history) => combineReducers({
        router: connectRouter(history),
        locations: locationReducer,
    });

    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }

    return appReducer(state, action);
};

export default rootReducer;