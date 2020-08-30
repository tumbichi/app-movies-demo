import { TYPE_SET_MOVIES_LIST, TYPE_SET_SUGGESTION_LIST, TYPE_SET_SELECTED_MOVIE } from '../actions/movies_state.action';

const initialState = {
    movies: [],
    suggestions: [],
    selectedMovie: null,
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type){
        case TYPE_SET_MOVIES_LIST:
            return {
                ...state,
                movies: payload,
            }
        case TYPE_SET_SUGGESTION_LIST:
            return {
                ...state,
                suggestions: payload
            }
        case TYPE_SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: payload,
            }
        default: 
            return state;
    }  
}

export default reducer;