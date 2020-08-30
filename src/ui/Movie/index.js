import React, { useState } from 'react';
import { connect } from 'react-redux';

/* import { 
    View, 
    Text 
} from 'react-native'; */

import MovieLayout from './components/movie-layout'; 
import Player from '../Player';
import Header from '../../components/header';
import Close from '../../components/close';
import Details from '../../components/details';

import { setSelectedMovie } from '../../redux/actions/movies_state.action';

const Movie = ({selectedMovie, setSelectedMovie}) => {
    const [isOnFullscreen, setOnFullscreen] = useState(false);

    const closeVideo = () => {
        setSelectedMovie(null);
    }

    return (
        <MovieLayout>
            {!isOnFullscreen && (
                <Header> 
                    <Close onPress={closeVideo}/>
                </Header>
            )}
            <Player fullscreen={isOnFullscreen} setFullscreen={setOnFullscreen}/>
            <Details {...selectedMovie}/>
        </MovieLayout>
    )
}

const mapStateToProps = ({movies}) => {
    return {
        selectedMovie: movies.selectedMovie,
    }
}

const mapDispatchToProps = {
    setSelectedMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
