import React from 'react';
import { withRouter, Switch } from 'react-router-dom';

import PublicRoute from '../../routes/PublicRoute';
import StaticLayout from '../../components/Layout/Layout/Static';

import {
    AsyncHome,
    AsyncUsers,
    AsyncLoginForm,
    AsyncRegisterPage
} from "./AsyncComponent";

const App = () =>(
    <React.Fragment>
        <Switch>
            <PublicRoute exact path='/' layout={StaticLayout} component={AsyncHome}/>
            <PublicRoute path='/users' layout={StaticLayout} component={AsyncUsers}/>
            <PublicRoute exact path='/login' layout={StaticLayout} component={AsyncLoginForm}/>
            <PublicRoute exact path='/signup' layout={StaticLayout} component={AsyncRegisterPage}/>
        </Switch>
    </React.Fragment>
);

export default withRouter(App);

