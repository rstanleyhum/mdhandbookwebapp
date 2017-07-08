
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


class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password1: "",
            password2: "",
        }
    }

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
                            <RaisedButton label="Save Password" />
                        </div>
                    </form>
                </Paper>
                <h3>{this.state.password1}</h3>
                <h3>{this.state.password2}</h3>
            </div>
        );
    }
}


export default ChangePasswordForm;