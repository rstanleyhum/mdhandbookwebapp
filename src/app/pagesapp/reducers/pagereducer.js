
import { Pages } from '../config/assets';
import { PUSH_PAGE, POP_PAGE, PUSH_WEB_PAGE } from '../actions/page';

const initialState = {
    history: ['disclaimer'],
    sourceUrl: Pages['disclaimer'],
    activeButton: false,
    title: 'disclaimer'
}

function PageReducer(state = initialState, action) {
    switch(action.type) {
        case PUSH_PAGE:
            var newLength = state.history.length+1;
            return Object.assign({}, state, {
                history: [
                    ...state.history,
                    action.id
                ],
                sourceUrl: Pages[action.id],
                activeButton: (newLength>2),
                title: action.id
            });
            
        case POP_PAGE:
            if (state.history.length < 3) {
                return state
            }

            var newLength = state.history.length-1;
            var active = (newLength>2);
            var prevId = state.history[newLength-1];
            var sourceUrl = "";
            var title = "";

            if (prevId.startsWith("http")) {
                sourceUrl = {uri: prevId};
                title = "";
            } else {
                sourceUrl = Pages[prevId];
                title = prevId;
            }

            return Object.assign({}, state, {
                history: state.history.slice(0, newLength),
                sourceUrl: sourceUrl,
                activeButton: active,
                title: prevId
            });

        
        case PUSH_WEB_PAGE:
            var newLength = state.history.length+1
            return Object.assign({}, state, {
                history: [
                    ...state.history,
                    action.sourceUrl
                ],
                sourceUrl: {uri: action.url},
                activeButton: (newLength>2),
                title: ""
            });

        default:
            return state;
    }
}

export default PageReducer
