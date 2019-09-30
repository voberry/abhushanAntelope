import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';
//
import Places from './PlacesContainer';

const About = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/places`} component={Places} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default About;
