import axios from 'axios';
import { BASE_URL } from '../constants';

export const getSuggestion = async (id) => {
    const { data } = await axios.get(`${BASE_URL}movie_suggestions.json?movie_id=${id}`);
    const { movies } = await data.data;
    return movies;
}