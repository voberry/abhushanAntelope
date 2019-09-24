import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

// import NotFound from '../Exception/NotFoundContainer';
//
import Profile from './ProfileContainer';
// import AddForm from './AddFormContainer';
// import EditForm from './EditFormContainer';
// import PendingList from './PendingListContainer';
// import PendingDetail from './PendingDetailContainer';

const Users = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}/profile`} component={Profile} />
            {/*<Route exact path={`${match.url}/add`} component={AddForm} />*/}
            {/*<Route exact path={`${match.url}/:id/edit/`} component={EditForm} />*/}
            {/*<Route exact path={`${match.url}/pending/`} component={PendingList} />*/}
            {/*<Route exact path={`${match.url}/pending/:id/detail`} component={PendingDetail} />*/}
            {/*<Route component={NotFound} />*/}
        </Switch>
    </Fragment>
);

export default Users;
