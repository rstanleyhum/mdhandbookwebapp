import React from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    ABOUT_TITLE,
    ABOUT_ROUTE
} from '../config/constants';


class RaisedAboutButton extends React.Component {
    render() {
        return (
            <RaisedButton
                containerElement={<Link to={ABOUT_ROUTE}/>}
                linkButton={true}
                label={ABOUT_TITLE}
            />
        )
    }
}


export class FlatAboutButton extends React.Component {
    render() {
        return (
            <FlatButton
                containerElement={<Link to={ABOUT_ROUTE}/>}
                linkButton={true}
                label={ABOUT_TITLE}
            />
        )
    }
}


export default RaisedAboutButton