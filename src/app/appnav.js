import React, { Component } from 'react';

import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import { history } from './store';
import Main from './containers/main';
import About from './containers/about';

export default class AppNav extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                </div>
            </ConnectedRouter>
        )
    }    
};
