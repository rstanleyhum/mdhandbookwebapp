import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import FlatButton from 'material-ui/FlatButton';

import { BOOKPAGE_ROUTE } from '../config/constants';


class FlatTopUserButton extends React.Component {
    static propTypes = {
        user: PropTypes.object
    }
    render() {
        return (
            <FlatButton
                containerElement={<Link to={BOOKPAGE_ROUTE} />}
                label={this.props.user.email}
            />
        )
    }
}


export default FlatTopUserButton