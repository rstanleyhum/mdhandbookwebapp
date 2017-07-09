import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const LoggedOutRoute = ({ component: Component, redirect: RedirectRoute, user, ...rest}) => (
    <Route {...rest} render={ props => (
        user ?
            <Redirect to={RedirectRoute} /> :
            <Component {...props} />
    )}/>
);

export default LoggedOutRoute

