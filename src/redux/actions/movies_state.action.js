import { getMoviesList } from '../../api/services/list-movies';
import { getSuggestion } from '../../api/services/movie-suggestion';

export const TYPE_SET_MOVIES_LIST = "SET_MOVIES_LIST";
export const TYPE_SET_SUGGESTION_LIST = "SET_SUGGESTION_LIST";
export const TYPE_SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";


export const requestMoviesList = () => {
    return (dispatch) => {
        return getMoviesList()
            .then((data) => {
                console.log('getMoviesList():', data);
                dispatch(setMoviesList(data));
            })
            .catch(error => console.log('thunk-error', error));
    }
};

export const requestSuggestions = (suggestion) => {
    return (dispatch) => {
        return getSuggestion(10)
            .then((data) => {
                console.log('getSuggestion():', data);
                dispatch(setSuggestionList(data));
            })
            .catch(error => console.log('thunk-error', error))
    }

}

export const setMoviesList = (movies) => {
    return {
        type: TYPE_SET_MOVIES_LIST,
        payload: movies
    }
};

export const setSuggestionList = (suggestions_movies) => {
    return {
        type: TYPE_SET_SUGGESTION_LIST,
        payload: suggestions_movies
    }
}

export const setSelectedMovie = (selected_item) => {
    console.log('selected_item', selected_item);
    return {
        type: TYPE_SET_SELECTED_MOVIE,
        payload: selected_item,
    }
}