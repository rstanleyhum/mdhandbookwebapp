import React from 'react';

import WebStyles from '../config/webstyles';

import ResetPasswordForm from '../components/resetpassword';



const ResetPassword = () => (
  <div style={WebStyles.subContainerCenter}>
      <h2>Reset Password</h2>
      <p>Please enter the email address that you used to login.
      If that email address exists then you will receive an email with a link to reset your password.</p>
      <p>If you do not remember your email address then please contact the administrator.</p>
      <ResetPasswordForm />
  </div>
);


export default ResetPassword;
