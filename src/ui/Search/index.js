import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { searchMovie } from '../../api/services/search-movie';
import { connect } from 'react-redux';
import { setSelectedMovie } from '../../redux/actions/movies_state.action';

const Search = ({ setSelectedMovie }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        searchMovie(text)
            .then(data => {
                console.log('searchMovie()', data);
                if (data) {
                    setSelectedMovie(data[0]);
                }
            })
            .catch(error => { console.log('database error:', error)});
    }

    const handleChangeText = (text) => {
        console.log('handleChangeText():', text)
        setText(text);
    }
    return (
        <TextInput 
            style={styles.input}
            placeholder="Busca tu pelicula favorita"
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmit}
        />    
    )
}

const dispatchToProps = {
    setSelectedMovie
}

export default connect(null, dispatchToProps)(Search);

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea',
    }
})
