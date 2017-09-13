import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {
    LOGIN_TITLE,
    LOGIN_ROUTE
} from '../config/constants';


class RaisedLoginButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={LOGIN_ROUTE}/>}
                label={LOGIN_TITLE}
            />
        )
    }
}


export class FlatLoginButton extends React.Component {
    render() {
        return (
            <FlatButton
                containerElement={<Link to={LOGIN_ROUTE}/>}
                label={LOGIN_TITLE}
            />
        )
    }
}


export default RaisedLoginButton