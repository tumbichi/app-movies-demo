// Core - Vendor?
import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

// Screens
import Home from './ui/screens/home';

// Components
import Header from './components/header';

// Containers
import SuggestionList from './containers/suggestion-list';
import CategoryList from './containers/category-list';
import Movie from './ui/Movie';
import Search from './ui/Search';

const AppLayout = ({ selectedMovie }) => {
    
    
    if (selectedMovie){
        return <Movie/>
    }else {
        return (
            <Home>
                <Header/>
                <Search/>
                <CategoryList />
                <SuggestionList />
            </Home>
        )
    }
    
}

const mapStateToProps = ({ movies }) => {
    return {
        selectedMovie: movies.selectedMovie,
    }
}

export default connect(mapStateToProps)(AppLayout);
