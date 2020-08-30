import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native';

const ControlLayout = ({ play, progressBar, progressTime, fullscreen, isOnFullscreen }) => {
    return (
        <View style={!isOnFullscreen ? styles.containerVertical : styles.containerHorizontal}>
            <View style={styles.start}>
                {play}
            </View>
            <View style={styles.center}>
                {progressBar}
                {progressTime}

            </View>
            <View style={styles.end}>
                {fullscreen}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerVertical: { 
        backgroundColor: '#121212cc',
        position: 'absolute',
        height: 35,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerHorizontal: {
        backgroundColor: '#121212cc',
        position: 'absolute',
        height: 35,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    start: {
        flexDirection: 'row',
        
    },
    center: {
        flexDirection: 'row',
        
    },
    end: {
        flexDirection: 'row',
    }
})

export default ControlLayout;