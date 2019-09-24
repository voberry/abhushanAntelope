import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';
//
import AboutUs from './AboutContainer';

const About = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={AboutUs} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default About;
