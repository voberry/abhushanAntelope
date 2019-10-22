import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Blog from './BlogContainer';
import BlogContent from './BlogContentContainer';

const Blogs = ({ match }) => (
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={Blog} />
            <Route exact path={`${match.url}/:title`} component={BlogContent} />
        </Switch>
    </Fragment>
);

export default Blogs;
