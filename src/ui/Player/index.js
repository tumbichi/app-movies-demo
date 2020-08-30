import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Text,
    ViewPagerAndroidBase,
    Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import ControlLayout from './components/control-layout';
import PlayPause from './components/play-pause';
import Layout from './components/layout';
import ProgressBar from './components/progress-bar';
import FullScreen from './components/fullscreen';
import ProgressTime from './components/progress-time';

import Orientation from 'react-native-orientation';

const Player = ({ fullscreen, setFullscreen }) => {

    // TODO: ProgressBar - On press progress listener.

    var playerRef = null;
    const [loading, setLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    //const [fullscreen, setScreenMode] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const { width } = Dimensions.get("window");

    // ComponentDidMount
    useEffect(() => {
        Orientation.lockToPortrait();
    }, [])
    
    // ComponentWillUnmount
    useEffect(() => {
        return () => {
            Orientation.lockToPortrait();
        }
      }, []);

    const handleBuffer = ({ isBuffering }) => {
        setLoading(isBuffering);
    }

    const handleLoad = (meta) => {
        setLoading(false);
        setDuration(meta.duration);
    }

    const handlePause = () => {
        if (progress === 1){
            playerRef.seek(0);
        }

        setPaused(!paused);
    }

    const handleProgress = (meta) => {
        setProgress((meta.currentTime / duration));
    }

    const handleEnd = () => {
        setPaused(true);
        setProgress(1);
    }

    const onProgressPress = (e) => {
        const position = e.nativeEvent.locationX;
        const progress = (position / (width / 1.690)) * duration;
        playerRef.seek(progress);
    }

    const handleFullScreen = () => {
        if (fullscreen){
            Orientation.lockToPortrait();
        }else{
            Orientation.lockToLandscapeLeft();
        }
        setFullscreen(!fullscreen);   
    }

    return (
        <Layout
            fullscreen={fullscreen}
            loading={loading}
            video={
                <Video
                    ref={ref => { playerRef = ref }}
                    source={{
                        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    style={styles.video}
                    resizeMode="contain"
                    onBuffer={handleBuffer}
                    onLoad={handleLoad}
                    onProgress={handleProgress}
                    onEnd={handleEnd}
                    paused={paused}
                    fullscreen={fullscreen}
                />
            }
            loader={
                <ActivityIndicator color="#413c69" />
            }
            controls={
                <ControlLayout 
                    play={<PlayPause paused={paused} onPress={handlePause}/>}
                    fullscreen={<FullScreen onPress={handleFullScreen}/>}
                    progressBar={<ProgressBar width={width / 1.690} progress={progress} onPress={onProgressPress}/>}
                    progressTime={<ProgressTime progress={progress} duration={duration}/>}
                    isOnFullscreen={fullscreen}
                />
            }
        />
    );
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
    },
    progress: {

    },
    
});

{/* style={styles.video} */}

export default Player; 


