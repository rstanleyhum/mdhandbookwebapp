
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import GlobalReducer from './reducers/globalreducer';

const middleware = () => {
    return applyMiddleware(
        thunk,
    )
};

const rootReducer = combineReducers({
    global: GlobalReducer,
});


const store = createStore(
    rootReducer,
    middleware()
);


export default store;
