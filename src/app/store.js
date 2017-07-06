
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const middleware = () => {
    return applyMiddleware(
        thunk,
        routerMiddleware(history),
    )
};

const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    middleware(),
);

export default store;
