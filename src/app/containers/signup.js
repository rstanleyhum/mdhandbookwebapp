import React from 'react';


import RaisedButton from 'material-ui/RaisedButton';
import WebStyles from '../config/webstyles';
import BasePage from '../components/basepage';

import SocialLoginButtons from '../components/socialloginbuttons';
import RaisedLoginButton from '../components/loginbutton';
import SignUpForm from '../components/signup';



const SignUp = () => (
  <BasePage 
    pageContent={(
      <div style={WebStyles.subContainerCenter}>
          <h2>Sign Up</h2>
          <p>You can sign up for an account...</p>
          <SignUpForm />
          <p>or</p>
          <SocialLoginButtons />
          <br />
          <p>If you already have an account...</p>
          <p><RaisedLoginButton /></p>
      </div>
    )}
  />
);


export default SignUp;
