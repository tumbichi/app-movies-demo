import React from 'react'
import { 
    StyleSheet, 
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

import ProgressBar from 'react-native-progress/Bar';

const ProgressPlayer = ({ height, width, progress, onPress}) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPress} hitSlop={
                {
                    top: 24,
                    left: 0,
                    bottom: 24,
                    right: 0,
                }
            }>
                <ProgressBar 
                    height={height || 14}
                    width={width}
                    animated={true}
                    progress={progress}
                    style={styles.progress}
                    color={"#fafafadf"}
                    unfilledColor={"#413c69"}
                    borderColor={"#413c69"}

                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default ProgressPlayer;

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    progress: {
        
    }
})