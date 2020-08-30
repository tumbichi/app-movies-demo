import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Fullscreen = ({ onPress }) => {
    return (
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.container}>
                    <Icon name='expand' size={16} color='white'/>
                </View>
            </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 14,
    },

});

export default Fullscreen
