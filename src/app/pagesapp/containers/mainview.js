
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';
import { WebView } from 'react-native';
import { pushPage, pushWebPage } from '../actions/page';


class MainView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WebView
                style={{flex: 1}}
                source={this.props.source}
                onMessage={e => {this.props.onMessage(e);}}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        source: state.pagesapp.sourceUrl
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMessage: (event) => {
            var url = event.nativeEvent.data + '';

            if (url.startsWith("hybrid://")) {
                var baseUrl = url.slice(9, url.length);
                dispatch(pushPage(baseUrl));
            }

            if (url.startsWith("http")) {
                dispatch(pushWebPage(url));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
