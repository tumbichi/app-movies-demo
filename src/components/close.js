import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native'

const Close = ({onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.container}>
            <Text style={styles.button}>X</Text>
        </TouchableOpacity>
    )
}

export default Close

const styles = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
