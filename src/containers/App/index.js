import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from "../../routes/PrivateRoute";

import StaticLayout from '../../components/Layout/Layout/Static';

import {
    AsyncHome,
    AsyncUsers,
    AsyncNotFound,
    AsyncLoginForm,
    AsyncRegisterPage,
    AsyncAbout,
    AsyncServices,
    AsyncContact,
    AsyncGallery,
    AsyncBlog
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={StaticLayout} component={AsyncHome}/>
            <PrivateRoute path='/users' layout={StaticLayout} component={AsyncUsers}/>
            <PublicRoute exact path='/login' layout={StaticLayout} component={AsyncLoginForm}/>
            <PublicRoute exact path='/contact-us' layout={StaticLayout} component={AsyncContact}/>
            <PublicRoute exact path='/about-us' layout={StaticLayout} component={AsyncAbout}/>
            <PublicRoute path='/our-services' layout={StaticLayout} component={AsyncServices}/>
            <PublicRoute path='/gallery' layout={StaticLayout} component={AsyncGallery}/>
            <PublicRoute path='/blogs' layout={StaticLayout} component={AsyncBlog}/>
            <PublicRoute exact path='/signup' layout={StaticLayout} component={AsyncRegisterPage}/>
            <PublicRoute exact path='/not-found' layout={StaticLayout} component={AsyncNotFound}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

