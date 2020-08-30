import axios from 'axios';
import { BASE_URL } from '../constants';

export const searchMovie = async (title) => {
    const { data } = await axios.get(`${BASE_URL}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
    const { movies } = await data.data;
    return movies;
}
