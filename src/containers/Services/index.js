import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';

import Places from './PlacesContainer';
import Location from './LocationsController';

const About = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/places`} component={Places} />
            <Route exact path={`${match.url}/places/:name`} component={Location} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default About;
