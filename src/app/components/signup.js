import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import firebase from '../services/firebase';

const style = {
    height: 300,
    width: 340,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password1: "",
            password2: "",
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePassword1Change = (event) => {
        this.setState({
            password1: event.target.value
        });
    };

    handlePassword2Change = (event) => {
        this.setState({
            password2: event.target.value
        });
    };

    handleClick = () => {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email, this.state.password1)
        .catch(error => {
            console.log("Error creating User");
            console.log(error.code);
            console.log(error.message);
        });
    }

    render() {
        return (
            <div>
                <Paper style={style} zDepth={1}>
                    <form onSubmit={this.props.onSubmit}>
                        <div>
                            <TextField
                                floatingLabelText="Email"
                                type="email"
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Password"
                                type="password"
                                onChange={this.handlePassword1Change}
                            />
                        </div>
                        <div>
                            <TextField
                                floatingLabelText="Password Verification"
                                type="password"
                                onChange={this.handlePassword2Change}
                            />
                        </div>
                        <br />
                        <div>
                            <RaisedButton
                                onClick={this.handleClick} 
                                label="Sign Up" />
                        </div>
                    </form>
                </Paper>
                <h3>{this.state.email}</h3>
                <h3>{this.state.password1}</h3>
                <h3>{this.state.password2}</h3>
            </div>
        )
    }
}

export default SignUp;