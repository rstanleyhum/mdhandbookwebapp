import { SET_USER } from '../actions/global';

const initialState = {
    doneFirstLoad: false,
    user: null
};

export default function GlobalReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return Object.assign({}, state, {
                user: action.user
            });
        
        default:
            return state;
    }
}