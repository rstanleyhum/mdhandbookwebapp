import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    height: 230,
    width: 340,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};


class EmailLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Paper style={style} zDepth={1}>
                    <form onSubmit={this.props.OnSubmit}>
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
                            onChange={this.handlePasswordChange}
                            />
                        </div>
                        <br />
                        <div>
                            <RaisedButton label="Login" />
                        </div>
                    </form>
                </Paper>
                <h3>{this.state.email}</h3>
                <h3>{this.state.password}</h3>
            </div>  
        );
    }
}



export default EmailLogin;