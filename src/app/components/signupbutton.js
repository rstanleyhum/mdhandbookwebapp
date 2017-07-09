import React from 'react';
import { Link } from 'react-router-dom';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


import {
    SIGNUP_TITLE,
    SIGNUP_ROUTE
} from '../config/constants';


class RaisedSignUpButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={SIGNUP_ROUTE}/>}
                label={SIGNUP_TITLE}
            />
        )
    }
}


export class FlatSignUpButton extends React.Component {
    
    render() {
        return (
            <FlatButton
                containerElement={<Link to={SIGNUP_ROUTE}/>}
                label={SIGNUP_TITLE}
            />
        )
    }
}


export default RaisedSignUpButton