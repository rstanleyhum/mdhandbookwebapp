import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { LOGIN_ROUTE } from '../config/constants';


const PrivateRoute = ({ component: Component, user, ...rest}) => (
    <Route {...rest} render={ props => (
        user ?
            <Component {...props}/> :
            <Redirect to={LOGIN_ROUTE}/>
    )}/>
);

export default PrivateRoute

