import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {AuthConsumer} from '../components/Layout/Header/AuthContext'
import {isUserLoggedIn} from "../utils/jwtUtil";

const PrivateRoute = ({component: Component, layout: Layout, ...rest}) => (

    isUserLoggedIn() &&
      <Route
        {...rest}
        render={props =>
            isUserLoggedIn() ?
            <Layout><Component {...props} /></Layout>
            :
            <Redirect to={{
              pathname: '/',
              state: {from: props.location}
            }}/>
        }
      />
);

export default PrivateRoute;
