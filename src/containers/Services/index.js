import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';

import Places from './PlacesContainer';
import Location from './LocationsController';
import Hotels from './HotelsContainer';
import Hotel from './HotelContainer';
import Treks from './TreksContainer';
import Trek from './TrekContainer';

const About = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/places`} component={Places} />
            <Route exact path={`${match.url}/places/:name`} component={Location} />
            <Route exact path={`${match.url}/hotels/`} component={Hotels} />
            <Route exact path={`${match.url}/hotels/:name`} component={Hotel} />
            <Route exact path={`${match.url}/treks/`} component={Treks} />
            <Route exact path={`${match.url}/treks/:name`} component={Trek} />
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default About;
