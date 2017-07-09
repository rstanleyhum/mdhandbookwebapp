import React from 'react';
import PropTypes from 'prop-types';


class WebFrame extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
    //    stylesheets: PropTypes.arrayOf(PropTypes.string),
    };

    componentDidMount() {
        this._updateIframe();
    }

    componentDidUpdate() {
        this._updateIframe();
    }

    _updateIframe() {
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        //const head = document.getElementsByTagName('head')[0];
        document.body.innerHTML = this.props.content;

        // this.props.stylesheets.forEach(url => {
        //     const ref = document.createElement('link');
        //     ref.rel = 'stylesheet';
        //     ref.type = 'text/css';
        //     ref.href = url;
        //     head.appendChild(ref);
        // });
    }

    render() {
        return <iframe ref="iframe" title="bookpage" width={this.props.width} height={this.props.height} />
    }
}


export default WebFrame