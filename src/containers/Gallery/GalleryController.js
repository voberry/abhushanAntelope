import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Gallery from '../../components/Gallery/Gallery';

export class GalleryController extends Component {

    render() {
        return (
            <Gallery
                {...this.props}
            />
        );
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    // return {
    //     actions: bindActionCreators(
    //         Object.assign({}),
    //         dispatch
    //     ),
    // };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GalleryController);
