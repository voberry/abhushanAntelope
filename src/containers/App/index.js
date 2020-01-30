import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import PrivateRoute from "../../routes/PrivateRoute";

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
    AsyncBlog,
    AsyncLayout
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={AsyncLayout} component={AsyncHome}/>
            <PublicRoute path='/users' layout={AsyncLayout} component={AsyncUsers}/>
            <PublicRoute exact path='/login' layout={AsyncLayout} component={AsyncLoginForm}/>
            <PublicRoute exact path='/contact-us' layout={AsyncLayout} component={AsyncContact}/>
            <PublicRoute exact path='/about-us' layout={AsyncLayout} component={AsyncAbout}/>
            <PublicRoute path='/our-services' layout={AsyncLayout} component={AsyncServices}/>
            <PublicRoute path='/gallery' layout={AsyncLayout} component={AsyncGallery}/>
            <PublicRoute path='/blogs' layout={AsyncLayout} component={AsyncBlog}/>
            <PublicRoute exact path='/signup' layout={AsyncLayout} component={AsyncRegisterPage}/>
            <PublicRoute exact path='/not-found' layout={AsyncLayout} component={AsyncNotFound}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

