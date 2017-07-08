import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


class SocialLoginButtons extends React.Component {
    render() {
        return (
          <div>
            <p>Sign In with Social Media Accounts</p>
            <RaisedButton
                label="Sign In With Google"
            /><br/><br/>
            <RaisedButton
                label="Sign In With Facebook"
            /><br/><br/>
            <RaisedButton
                label="Sign In With Twitter"
            /><br/><br/>
          </div>
        )
    }
}


export default SocialLoginButtons