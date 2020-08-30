import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const Suggestion = ({title, rating, year, genres, medium_cover_image, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image style={styles.cover}
                        source={{
                            uri: medium_cover_image
                        }}/>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                </View>

                <View style={styles.right}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                    <Text style={styles.genre}>{genres.toString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
    },
    left: {

    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        color: '#413c69',
    },
    year: {
        alignSelf: 'flex-start',
        backgroundColor: '#3c3c3c',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: '#fafafa',
        borderRadius: 6,
        overflow: 'hidden',
    },
    rating: {
        position: 'absolute',
        left: 0,
        top: 0,
        paddingVertical: 5,
        paddingHorizontal: 7,
        backgroundColor: '#121212',
    },
    genre: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    ratingText: {
        color: '#fafafa',
    }
})

export default Suggestion;
