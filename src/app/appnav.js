import React, { Component } from 'react';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import { history } from './store';
import Main from './containers/main';
import About from './containers/about';
import Login from './containers/login';
import SignUp from './containers/signup';
import ResetPassword from './containers/resetpassword.js';
import ChangePassword from './containers/changepassword.js';


import { 
    HOME_ROUTE,
    LOGIN_ROUTE,
    CHANGE_PASSWORD_ROUTE,
    RESET_PASSWORD_ROUTE,
    SIGNUP_ROUTE,
    ABOUT_ROUTE
} from './config/constants';


export default class AppNav extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path={HOME_ROUTE} component={Main}/>
                    <Route path={ABOUT_ROUTE} component={About}/>
                    <Route path={LOGIN_ROUTE} component={Login} />
                    <Route path={SIGNUP_ROUTE} component={SignUp} />
                    <Route path={RESET_PASSWORD_ROUTE} component={ResetPassword} />
                    <Route path={CHANGE_PASSWORD_ROUTE} component={ChangePassword} />
                </div>
            </ConnectedRouter>
        )
    }    
};
