import {
    LOCATION_FETCH_REQUEST,
    LOCATION_FETCH_REQUEST_SUCCESS,
    LOCATION_FETCH_REQUEST_FAILURE,
    LOCATION_CLEAN_REQUEST
} from "../constants/actionTypes";

export const locationFetchRequest = () => {
    return {
        type: LOCATION_FETCH_REQUEST,
    };
};

export const locationFetchRequestSuccess = data => {
    return {
        type: LOCATION_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const locationFetchRequestFailure = error => {
    return {
        type: LOCATION_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const locationCleanRequest = () => {
    return {
        type: LOCATION_CLEAN_REQUEST
    }
};