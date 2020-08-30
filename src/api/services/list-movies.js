import axios from 'axios';
import { BASE_URL } from '../constants';

export const getMoviesList = async () => {
    const { data } = await axios.get(`${BASE_URL}list_movies.json`);
    const { movies } = await data.data;
    return movies;
}
