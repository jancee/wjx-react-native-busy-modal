/**
 * wjx-react-native-busy-modal
 *
 * https://github.com/jancee/wjx-react-native-busy-modal
 * Blog: http://blog.wjingxi.com
 * Author: Jingxi Wang <jancee.wang@qq.com>
 * Date: 2017-11-10 13:58
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal
} from 'react-native'
import PropTypes from 'prop-types';

export default class BusyModal extends Component {

    static defaultProps = {
        title: "请等待",
        containerStyle: {},
    };

    static propTypes = {
        title: PropTypes.string,
        containerStyle: PropTypes.object
    };


    /** Callable Methods **/
    show() {
        this.setState({isShow: true, tipText: this.props.title});
    }

    hide() {
        this.setState({isShow: false});
    }

    updateCurrentTipText(tipText: string) {
        this.setState({tipText: tipText});
    }

    /** Internal Methods **/
    constructor(props) {
        super(props);

        this.state = {
            isShow: false,
            tipText: this.props.title,
        }
    }

    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <View style={[this.state.isShow ? styles.container : styles.containerHidden, this.props.style]}>
                <View style={styles.innerContainer}>
                    <View style={{
                        height: 120,
                        width: 100,
                        backgroundColor: "rgba(255,255,255,0.8)",
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <View style={{
                            height: 80, width: 80
                        }}>
                        </View>
                        <Text>{this.state.tipText}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    containerHidden: {
        height: 0,
        width: 0,
        opacity: 0
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 100,
    }
});