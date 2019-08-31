import { push } from 'connected-react-router';
import { message } from 'antd';
import locations from './__mocks__/locations'

import {
    locationFetchRequest,
    locationFetchRequestSuccess,
    locationFetchRequestFailure,
} from '../actions/locationAction';
import { store, update, fetch } from '../utils/httpUtil';

export const fetchLocations = (formData = {}) => {
    return dispatch => {
        dispatch(locationFetchRequest());

        return store('todos', formData)
            .then(response => {
                if (response) {
                    dispatch(locationFetchRequestSuccess(locations.locations.data));
                } else {
                    // TODO
                }
            })
            .catch(error => dispatch(locationFetchRequestFailure(error.response.data)));
    };
};