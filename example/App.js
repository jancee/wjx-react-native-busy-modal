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

import {BusyModal, BusyModalManager} from 'wjx-react-native-busy-modal';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.mask}>

                <TouchableOpacity onPress={() => {
                    BusyModalManager.show();
                    setTimeout(() => {
                        BusyModalManager.hide();
                    }, 5000);
                }}>
                    <Text>Show</Text>
                </TouchableOpacity>

                <BusyModal/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    mask: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
