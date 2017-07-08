import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    RESET_PASSWORD_TITLE,
    RESET_PASSWORD_ROUTE
} from '../config/constants';


class RaisedResetPasswordButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={RESET_PASSWORD_ROUTE}/>}
                linkButton={true}
                label={RESET_PASSWORD_TITLE}
            />
        )
    }
}


export class FlatResetPasswordButton extends React.Component {
    render() {
        return (
            <FlatButton
                containerElement={<Link to={RESET_PASSWORD_ROUTE}/>}
                linkButton={true}
                label={RESET_PASSWORD_TITLE}
            />
        )
    }
}


export default RaisedResetPasswordButton