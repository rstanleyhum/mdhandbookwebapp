import React from 'react';
import PropTypes from 'prop-types';


class WebFrame extends React.Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        stylesheet: PropTypes.string,
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
        document.body.innerHTML = this.props.content;

        if(this.props.stylesheet) {
            const head = document.getElementsByTagName('head')[0];
            var ref = document.createElement('style');
            ref.type = 'text/css';
            if (ref.styleSheet) {
                ref.styleSheet.cssText = this.props.stylesheet;
            } else {
                ref.appendChild(document.createTextNode(this.props.stylesheet));
            }
            head.appendChild(ref);
        }
    }

    render() {
        return <iframe ref="iframe" title="bookpage" width={this.props.width} height={this.props.height} />
    }
}


export default WebFrame