import React from 'react';

import AppBar from 'material-ui/AppBar';


import {
  WEBSITE_TITLE,
} from '../config/constants';

import HomeIconButton from './homeiconbutton';
import { FlatLoginButton } from './loginbutton';
import { FlatSignUpButton } from './signupbutton';
import FlatAboutButton from './aboutbutton';
import { FlatLogoutButton } from './logoutbutton';
import FlatTopUserButton from './topuserbutton';
import { FlatChangePasswordButton } from './changepasswordbutton';


const TopBar = ({user}) => (
    user === undefined ?
        <AppBar title={WEBSITE_TITLE} /> :
        user == null ?
            <div>
                <AppBar
                    title={WEBSITE_TITLE}
                    iconElementLeft={<HomeIconButton />}
                    iconElementRight={
                        <div>
                          <FlatAboutButton />
                        </div>
                    }
                />
            </div> :
            <div>
                <AppBar
                    title={WEBSITE_TITLE}
                    iconElementLeft={<HomeIconButton />}
                    iconElementRight={
                        <div>
                          <FlatAboutButton />
                        </div>    
                    }
                />
            </div>
)

export default TopBar;