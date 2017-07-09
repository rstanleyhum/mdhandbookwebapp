import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import firebase from '../services/firebase';

import {
    LOGOUT_TITLE,
    LOGOUT_ROUTE,
    LOGIN_ROUTE
} from '../config/constants';


class RaisedLogoutButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={LOGOUT_ROUTE}/>}
                label={LOGOUT_TITLE}
            />
        )
    }
}


export class FlatLogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false
        };
    }

    handleClick = () => {
        firebase.auth().signOut()
        .then(() => {
            this.setState({shouldRedirect: true});
        })
        .catch(function(error) {
            console.log("Error during signout");
        });
    }

    render() {
        return (
            <FlatButton
                containerElement={
                    this.state.shouldRedirect ?
                        <Redirect to={LOGIN_ROUTE} /> :
                        <Link to="#" />
                }
                onClick={this.handleClick} 
                label={LOGOUT_TITLE}
            />
        )
    }
}


export default RaisedLogoutButton