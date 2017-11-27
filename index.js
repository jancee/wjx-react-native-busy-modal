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
    Modal,
    Dimensions,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Animated,
} from 'react-native';
import PropTypes from 'prop-types';

const screen = Dimensions.get('window');
const WIDTH = screen.width;
const HEIGHT = screen.height;

let busyModal;

import defaultGifImages from './src/house'

class BusyModal extends Component {

    interval;

    static defaultProps = {
        title: "Loading",
        containerStyle: {},
        imageStyle: {},
        titleStyle: {},
        enableCancelOnClickBlank: false,
        enableCancelOnClickModal: false,
        gifInterval: 20,
        gifImages: defaultGifImages,
        animated: true
    };

    static propTypes = {
        title: PropTypes.string,
        containerStyle: PropTypes.object,
        imageStyle: PropTypes.object,
        titleStyle: PropTypes.object,
        enableCancelOnClickBlank: PropTypes.bool,
        gifInterval: PropTypes.number,
        gifImages: PropTypes.array,
        animated: PropTypes.bool
    };

    /** Internal Methods **/
    constructor(props) {
        super(props);
        busyModal = this;

        this.state = {
            isShow: false,
            tipText: this.props.title,

            gifIndex: 0,

            fadeAnim: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let next = this.state.gifIndex + 1;
            if (next >= this.props.gifImages.length) {
                next = 0;
            }
            this.setState({gifIndex: next});
        }, this.props.gifInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startAnimation(isShow, cb) {
        Animated.timing(                            
          this.state.fadeAnim, {
            toValue: isShow ? 1 : 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {
            cb && cb();
        });                   
    }

    _renderGif() {

        return (
            <View style={{
                height: 80, width: 80, justifyContent: 'center', alignItems: 'center'
            }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={this.props.gifImages[this.state.gifIndex]}
                           style={[{height: 50, width: 50}, this.props.imageStyle]}/>
                </View>
            </View>
        )
    }

    render() {
        return this.state.isShow ? (
            <View style={StyleSheet.absoluteFill}>

                {/* touch blank callback, and expand to full screen */}
                <TouchableWithoutFeedback onPress={() => {
                    console.log('取消');
                    if (this.props.enableCancelOnClickBlank) {
                        BusyModalManager.hide();
                    }
                }}>
                    <View style={{height: HEIGHT, width: WIDTH}}>

                        {/* mask */}
                        <Animated.View style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            justifyContent: 'center',
                            alignItems: 'center',
                            opacity: this.state.fadeAnim
                        }}>

                            {/* touch modal callback*/}
                            <TouchableWithoutFeedback onPress={() => {
                                if (this.props.enableCancelOnClickModal) {
                                    BusyModalManager.hide();
                                }
                            }}>

                                {/* real modal */}
                                <View style={[styles.container, this.props.containerStyle]}>
                                    <View style={{
                                        height: 120,
                                        width: 100,
                                        backgroundColor: "rgba(255,255,255,0.8)",
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                    }}>
                                        {this._renderGif()}
                                        <Text style={[this.props.titleStyle]}> {this.state.tipText}</Text>
                                    </View>
                                </View>

                            </TouchableWithoutFeedback>

                        </Animated.View>

                    </View>
                </TouchableWithoutFeedback>

            </View>
        ) : (
            <View/>
        )
    }
}

const styles = StyleSheet.create({
    mask: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 100,
    }
});

class BusyModalManager {

    /**
     * show modal
     */
    static show() {
        busyModal.setState({
            isShow: true,
            gifIndex: 0,
            tipText: busyModal.props.title
        }, () => {
            busyModal.startAnimation(true);
        });
    }

    /**
     * hide modal
     */
    static hide() {
        busyModal.startAnimation(false, () => {
            busyModal.setState({isShow: false});
        });
    }

    /**
     * delay ms to show
     *
     * @param ms
     */
    static showDelay(ms) {
        setTimeout(() => {
            this.show();
        }, ms);
    }

    /**
     * Show, then wait for ms to hide
     *
     * @param ms
     */
    static delayShow(ms) {
        this.hide();
        setTimeout(() => {
            this.show();
        }, ms);
    }

    /**
     * Modify the title as temporary title, until the modal is hidden
     * @param title
     */
    static changeToTempTitle(title) {
        busyModal.setState({tipText: title});
    }

}

export {
    BusyModal,
    BusyModalManager
}