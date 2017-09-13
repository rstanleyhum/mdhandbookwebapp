import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import firebase from '../services/firebase';


class SocialLoginButtons extends React.Component {
    handleClick = provider => {
        firebase.auth().signInWithPopup(provider)
            .then(function(result) {
            })
            .catch(function(error) {
                console.log("Error logging in with provider");
                console.log(error.code);
                console.log(error.Message);
            });
    }

    handleGoogleClick = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        this.handleClick(provider);
    }

    handleFacebookClick = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        this.handleClick(provider);
    }

    handleTwitterClick = () => {
        var provider = new firebase.auth.TwitterAuthProvider();
        this.handleClick(provider);
    }

    render() {
        return (
          <div>
            <p>Sign In with Social Media Accounts</p>
            <RaisedButton
                label="Sign In With Google"
                onClick={this.handleGoogleClick}
            /><br/><br/>
            <RaisedButton
                label="Sign In With Facebook"
                onClick={this.handleFacebookClick}
            /><br/><br/>
            <RaisedButton
                label="Sign In With Twitter"
                onClick={this.handleFacebookClick}
            /><br/><br/>
          </div>
        )
    }
}



export default SocialLoginButtons