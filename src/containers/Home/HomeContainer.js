import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../../components/Home';
import * as locationAction from "../../actions/locationAction";
import * as locationService from "../../services/locationService";


export class HomeContainer extends Component {

    /**
     * Add currency record.
     * @param {object} formData
     *
     */
    fetchLocations = (formData = {}) => {
        this.props.actions.fetchLocations(formData);
    };


    render() {
        return (
            <Home
                fetchLocations={this.fetchLocations}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    locations: state.locations.payload,
    locationErrors : state.locations.error,
    locationLoading: state.locations.loading
});

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign({}, locationService, locationAction),
            dispatch
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeContainer);
