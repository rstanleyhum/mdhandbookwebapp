import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {
    ABOUT_TITLE,
    ABOUT_ROUTE
} from '../config/constants';


export class RaisedAboutButton extends React.Component {
    render() {
        console.log(this.props);
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
        console.log(this.props.user);
        return (
            <FlatButton
                containerElement={<Link to={ABOUT_ROUTE}/>}
                label={ABOUT_TITLE}
            />
        )
    }
}

FlatAboutButton.propTypes = {
    user: PropTypes.object
};

export default FlatAboutButton