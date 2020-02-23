import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';
//
import Profile from './ProfileContainer';
import Checkout from './CheckoutContainer';
import Invoice from './InvoiceContainer';


const Users = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/`} component={Profile} />
            <Route exact path={`${match.url}/:name/checkout`} component={Checkout} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Users;
