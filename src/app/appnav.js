import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-spinner';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import firebase from './services/firebase';

import { setUser } from './actions/global';
import store from './store';

import WebStyles from './config/webstyles';

import PrivateRoute from './utils/privateroute';
import LoggedOutRoute from './utils/loggedoutroute';

import Main from './containers/main';
import About from './containers/about';
import Login from './containers/login';
import SignUp from './containers/signup';
import ResetPassword from './containers/resetpassword.js';
import ChangePassword from './containers/changepassword.js';
import BookPage from './containers/bookpage';
import TopBar from './components/topbar';

import { 
    HOME_ROUTE,
    LOGIN_ROUTE,
    CHANGE_PASSWORD_ROUTE,
    RESET_PASSWORD_ROUTE,
    SIGNUP_ROUTE,
    ABOUT_ROUTE,
    BOOKPAGE_ROUTE
} from './config/constants';

const NotFound = () => (
    <h2>404... This page was not found.</h2>
)

class AppNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    static propTypes = {
        user: PropTypes.object
    }



    componentDidMount() {
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({user});
            store.dispatch(setUser(user));
        });
    }

    render() {
        const { user } = this.state;
        return (
            <BrowserRouter>
                <div style={WebStyles.page}>
                    <TopBar user={user}/>
                    <div>{ user === undefined ?  
                        <Spinner /> : 
                        (<div style={WebStyles.mainContainer}>
                            <Switch>
                            <Route exact path={HOME_ROUTE} component={Main}/>                  
                            <Route exact path={ABOUT_ROUTE} component={About} />
                            <Route path='*' component={NotFound} />
                            </Switch>
                        </div>)
                    }</div>
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
