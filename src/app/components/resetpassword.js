import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


const style = {
    height: 160,
    width: 340,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
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
                        <br />
                        <div>
                            <RaisedButton label="Send Reset Email" />
                        </div>
                    </form>
                </Paper>
                <h3>{this.state.email}</h3>
            </div>
        )
    }
}


export default ResetPassword;