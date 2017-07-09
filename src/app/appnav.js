import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import firebase from './services/firebase';

import { setUser } from './actions/global';
import store from './store';

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


class AppNav extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user =>{
            store.dispatch(setUser(user));
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path={HOME_ROUTE} component={Main}/>
                    <Route path={ABOUT_ROUTE} render={() => (
                        this.props.user ?
                            <About user={this.props.user} /> :
                            <Redirect to={LOGIN_ROUTE}/>
                    )}/>
                    <Route path={LOGIN_ROUTE} component={Login} user={this.props.user} />
                    <Route path={SIGNUP_ROUTE} component={SignUp} />
                    <Route path={RESET_PASSWORD_ROUTE} component={ResetPassword} />
                    <Route path={CHANGE_PASSWORD_ROUTE} component={ChangePassword} />
                </div>
            </BrowserRouter>
        )
    }    
};

const mapStateToProps = state => ({
    user: state.global.user
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(AppNav);
