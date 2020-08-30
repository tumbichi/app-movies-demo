import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ProgressTime = ({progress, duration}) => {

    const secondsToTime = (time) => {
        return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + time % 60;
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.time}>{secondsToTime(Math.floor(progress * duration))}</Text>
        </View>
    )
}

export default ProgressTime;

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },  
    time:{
        color: '#fafafa'
    }
})
