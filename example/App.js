/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import BusyModal from 'wjx-react-native-busy-modal';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={() => {
                    // BusyModal.show();
                    setTimeout(() => {
                        // BusyModal.hide();
                    }, 5000);
                }}>
                    <Text>Show</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
