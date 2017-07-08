
import React from 'react';

import WebStyles from '../config/webstyles';
import BasePage from '../components/basepage';
import SocialLoginButtons from '../components/socialloginbuttons';

import EmailLogin from '../components/emaillogin';

import RaisedSignUpButton from '../components/signupbutton';
import RaisedResetPasswordButton from '../components/resetpasswordbutton';



const Login = () => (
  <BasePage 
    pageContent={(
      <div style={WebStyles.subContainerCenter}>
          <h2>Login</h2>
          <p>Login with your account details...</p>
          <EmailLogin />
          <p>or</p>
          <SocialLoginButtons />
          <br />
          <p>If you need an account...</p>
          <RaisedSignUpButton /><br /><br />
          <p>If you have forgotten your password...</p>
          <RaisedResetPasswordButton />
      </div>
    )}
  />
);


export default Login;
