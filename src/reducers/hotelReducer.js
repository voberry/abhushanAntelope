import {
    HOTEL_FETCH_REQUEST,
    HOTEL_FETCH_REQUEST_SUCCESS,
    HOTEL_FETCH_REQUEST_FAILURE,
    HOTEL_CLEAN_REQUEST
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: true,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const hotelReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case HOTEL_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case HOTEL_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case HOTEL_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case HOTEL_CLEAN_REQUEST:
            return Object.assign({}, state, {
                loading: false,
                errors: {},
                payload: [],
            });

        default:
            return state;
    }
};

export default hotelReducer;
