import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import {
    HOME_TITLE,
    HOME_ROUTE
} from '../config/constants';


class HomeIconButton extends React.Component {
    render() {
        return (
            <IconButton
                containerElement={<Link to={HOME_ROUTE}/>}
                tooltip={HOME_TITLE}
                linkButton={true}>
                <ActionHome />
            </IconButton>
        )
    }
}

export default HomeIconButton;
