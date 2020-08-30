import React from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

const PlayerLayout = ({fullscreen, loading, video, loader, controls}) => {
    return (
        <View style={!fullscreen ? styles.containerVertical : styles.containerHorizontal}>
            <View style={styles.video}>
                {video}
            </View>
            <View style={styles.overlay}>
                {
                    loading && loader
                }
            </View>
            {controls}
        </View>
    )
}

const styles = StyleSheet.create({
    containerVertical: {
        paddingTop: '56.25%',
    },
    containerHorizontal: {
        height: '100%',
        width: '100%',
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    overlay: { 
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default PlayerLayout;
