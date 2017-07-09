import React from 'react';

import FlatButton from 'material-ui/FlatButton';


class FlatTopUserButton extends React.Component {

    render() {
        return (
            <FlatButton
                onClick={() => console.log("User clicked")}
                label="user name"
            />
        )
    }
}


export default FlatTopUserButton