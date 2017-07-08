import React from 'react';

import AppBar from 'material-ui/AppBar';


import {
  WEBSITE_TITLE,
} from '../config/constants';

import HomeIconButton from './homeiconbutton';
import { FlatLoginButton } from './loginbutton';
import { FlatSignUpButton } from './signupbutton';
import { FlatAboutButton } from './aboutbutton';


class TopBar extends React.Component {
    render() {
        return (
            <AppBar 
                title={WEBSITE_TITLE}
                iconElementLeft={<HomeIconButton />}
                iconElementRight={
                <div>
                    <FlatAboutButton />
                    <FlatSignUpButton />
                    <FlatLoginButton />
                </div>
                }
            />
        )
    }
}

export default TopBar;