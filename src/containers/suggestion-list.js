import React, { useEffect } from 'react'
import {
    FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import { requestMoviesList, setSelectedMovie } from '../redux/actions/movies_state.action';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

const SuggestionList = ({ movies, setSelectedMovie, requestMoviesList}) => {

    useEffect(() => {
        requestMoviesList()
    }, [])
    
    const keyExtractor = item => item.id.toString();

    const renderEmpty = () => <Empty text="No hay elementos en la lista :'("/>
    
    const itemSeparator = () => <Separator/>

    const handlePressSuggestion = item => {
        setSelectedMovie(item);
    }

    const renderItem = ({ item }) => {
        return (
            <Suggestion 
                {...item}
                onPress={() => {handlePressSuggestion(item)}}/>
        );
    }
    
    return (
        <Layout title="Recomendados para ti">
            <FlatList
                keyExtractor={keyExtractor}
                data={movies}
                ListEmptyComponent={renderEmpty}
                ItemSeparatorComponent={itemSeparator}
                renderItem={renderItem}/>
        </Layout>
    )
}

const mapStateToProps = ({movies}) => {
    return ({
        movies: movies.movies
    })
}

const mapDispatchToProps = {
    requestMoviesList,
    setSelectedMovie,
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);