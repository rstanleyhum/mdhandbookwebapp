
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import './index.css';

import AppNav from './app/appnav';

import registerServiceWorker from './registerServiceWorker';

import store from './app/store';



ReactDOM.render(
    <Provider store={ store }>
        <AppNav />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
