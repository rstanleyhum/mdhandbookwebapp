import React from 'react';

import WebStyles from '../config/webstyles';
import BasePage from '../components/basepage';

import ChangePasswordForm from '../components/changepassword';



const ChangePassword = () => (
  <BasePage 
    pageContent={(
        <div style={WebStyles.subContainerCenter}>
          <h2>Change Password</h2>
          <p>Please enter a new password</p>
          <ChangePasswordForm />
        </div>
    )}
  />
);


export default ChangePassword;
