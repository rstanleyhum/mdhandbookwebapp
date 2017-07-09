import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    ABOUT_TITLE,
    ABOUT_ROUTE
} from '../config/constants';


export class RaisedAboutButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={ABOUT_ROUTE}/>}
                label={ABOUT_TITLE}
            />
        )
    }
}


class FlatAboutButton extends React.Component {
    render() {
        return (
            <FlatButton
                containerElement={<Link to={ABOUT_ROUTE}/>}
                label={ABOUT_TITLE}
            />
        )
    }
}

export default FlatAboutButton