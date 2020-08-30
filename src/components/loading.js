import React from 'react'
import { 
    StyleSheet,
    Text,
    View, 
    Image, 
    ActivityIndicator
} from 'react-native'

const Loading = ({}) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../res/images/logo.png')}/>
            <ActivityIndicator color="#d6862a"/>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#413c69',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: { 
        width: 160,
        height: 52,
        resizeMode: 'contain',
        marginBottom: 10,
    }
})
