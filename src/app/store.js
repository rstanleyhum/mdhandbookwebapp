
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { config } from './assets/firebase.secret';

export const history = createHistory()


const createStoreWithFirebase = compose(
    reactReduxFirebase(config, { userProfile: 'users' }),
)(createStore)


const middleware = () => {
    return applyMiddleware(
        thunk,
        routerMiddleware(history),
    )
};

const rootReducer = combineReducers({
    router: routerReducer,
    firebase: firebaseStateReducer,
});


const store = createStoreWithFirebase(
    rootReducer,
    middleware(),
);

export default store;
