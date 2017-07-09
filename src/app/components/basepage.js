import React from 'react';
import PropTypes from 'prop-types';

import TopBar from '../components/topbar';
import WebStyles from '../config/webstyles';

const BasePage = ({ pageContent, user }) => (
    <div style={WebStyles.page}>
        <TopBar user={user} />
        <div style={WebStyles.mainContainer}>
            {pageContent}
        </div>
    </div>

);


BasePage.propTypes = {
    pageContent: PropTypes.object,
}

export default BasePage;