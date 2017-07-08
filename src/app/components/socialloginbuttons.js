import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';


class SocialLoginButtons extends React.Component {
    render() {
        return (
          <div>
            <p>Sign In with Social Media Accounts</p>
            <p><RaisedButton
                label="Sign In With Google"
            /></p>
            <p><RaisedButton
                label="Sign In With Facebook"
            /></p>
            <p><RaisedButton
                label="Sign In With Twitter"
            /></p>
          </div>
        )
    }
}


export default SocialLoginButtons