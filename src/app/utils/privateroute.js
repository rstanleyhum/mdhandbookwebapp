import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, user, ...rest}) => (
    <Route {...rest} render={ props => (
        user ?
            <Component user={user} {...props}/> :
            <Redirect to={LOGIN_ROUTE}/>
    )}/>
);

export default PrivateRoute

