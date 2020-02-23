import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Invoice from '../../components/Checkout/Invoice';

export class InvoiceContainer extends Component {

    render() {
        return (
            <Invoice
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
    return {
        actions: bindActionCreators(
            Object.assign({}),
            dispatch
        ),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InvoiceContainer);
