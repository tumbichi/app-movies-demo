import React from 'react'
import {
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const PlayPause = ({paused, onPress}) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            underlayColor="red"
            hitSlop={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
            <View style={styles.container}>
                {paused ? 
                    <Icon name={'play'} color='white' size={14}/> : 
                    <Icon name={'pause'} color='white'size={14}/> 
                }
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },
    button: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    },
})

export default PlayPause;