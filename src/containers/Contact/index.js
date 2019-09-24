import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactUs from './ContactContainer';

const Contact = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={ContactUs} />
        </Switch>
    </Fragment>
);

export default Contact;
