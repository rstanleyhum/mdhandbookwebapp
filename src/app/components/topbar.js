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


const TopBar = ({user}) => (
            <AppBar 
                title={WEBSITE_TITLE}
                iconElementLeft={<HomeIconButton />}
                iconElementRight={
                <div>
                    <FlatAboutButton />
                    {
                        user ?
                        <span><FlatTopUserButton /><FlatLogoutButton /></span>
                        :
                        <span><FlatSignUpButton /><FlatLoginButton /></span>
                    }
                </div>
                }
            />
);


export default TopBar;