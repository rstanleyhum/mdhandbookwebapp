import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import firebase from '../services/firebase';

import {
    LOGOUT_TITLE,
    LOGOUT_ROUTE
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
    handleClick = () => {
        console.log("logout");
        firebase.auth().signOut()
        .catch(function(error) {
            console.log("Error during signout");
        });
    }

    render() {
        return (
            <FlatButton
                onClick={this.handleClick}
                label={LOGOUT_TITLE}
            />
        )
    }
}


export default RaisedLogoutButton