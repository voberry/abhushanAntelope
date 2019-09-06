import {
    LOCATION_FETCH_REQUEST,
    LOCATION_FETCH_REQUEST_SUCCESS,
    LOCATION_FETCH_REQUEST_FAILURE, LOCATION_CLEAN_REQUEST
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: true,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const locationReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case LOCATION_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case LOCATION_FETCH_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                payload: action.data,
                errors: {},
            });

        case LOCATION_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case LOCATION_CLEAN_REQUEST:
            return Object.assign({}, state, {
                loading: false,
                errors: {},
                payload: [],
            });

        default:
            return state;
    }
};

export default locationReducer;
