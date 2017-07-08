
import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

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
                            <RaisedButton label="Sign Up" />
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