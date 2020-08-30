import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

const Header = ({children}) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        source={require('../res/images/logo.png')}
                        style={styles.logo}
                    />
                    <View style={styles.right}>
                        {children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#413c69',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    logo: {
        height: 26,
        width: 80,
        resizeMode: 'contain'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default Header;