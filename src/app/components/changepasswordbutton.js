import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import {
    CHANGE_PASSWORD_TITLE,
    CHANGE_PASSWORD_ROUTE
} from '../config/constants';


class RaisedChangePasswordButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={CHANGE_PASSWORD_ROUTE}/>}
                label={CHANGE_PASSWORD_TITLE}
            />
        )
    }
}


export class FlatChangePasswordButton extends React.Component {
    render() {
        return (
            <FlatButton
                containerElement={<Link to={CHANGE_PASSWORD_ROUTE}/>}
                label={CHANGE_PASSWORD_TITLE}
            />
        )
    }
}


export default RaisedChangePasswordButton