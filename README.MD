![](https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png)

# wjx-react-native-busy-modal

[Click Here, 中文介绍](./README.zh.MD)

[![npm version](https://badge.fury.io/js/wjx-react-native-busy-modal.svg)](https://badge.fury.io/js/wjx-react-native-busy-modal)

A component for React Native, is a modal, used to show something is being processed.
You can customize the wait animation, modal animation, text prompt in your component, and so on.

# Features

* Customizable prompts

* Simple call method

* No intrusion



# Demo

Demo is under the `example` folder, you can run it in the following way:
Under the root directory, run such:
```
npm install
cd example && npm install && react-native run-ios
```



# Setup

This library is available on npm, install it with: 

```
npm install --save wjx-react-native-busy-modal 
```

or

```
yarn add wjx-react-native-busy-modal
```



# Usage

Add `<BusyModal/>` as child nodes under the `View` of the `root node` of the app

```javascript
import {BusyModal} from 'wjx-react-native-busy-modal';

...

render() {
    return (
        <View style={{flex:1}}>
            ...Other Components
            <BusyModal/>
        </View>
    );
}

```

Call BusyModalManagers's method, when need to use.

```javascript
import {BusyModalManager} from 'wjx-react-native-busy-modal';

...


<TouchableOpacity onPress={() => {
    BusyModalManager.show();
    setTimeout(() => {
        BusyModalManager.hide();
    }, 5000);
}}>
    <Text>Show</Text>
</TouchableOpacity>

```



# Available props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | "Loading" | Title |
| containerStyle | object | {} | Modal style |
| imageStyle | object | {} | Image Style |
| titleStyle | object | {} | Title Style |
| enableCancelOnClickBlank | boolean | false | enable hide modal, when blank is clicked |
| enableCancelOnClickModal | boolean | false | enable hide modal, when modal is clicked |
| gifInterval | number | 0 | when custom loading image, set interval ms for each image |
| gifImages | array | [(house)] | when custom loading image, set all images |




# Methods

You can use `BusyModalManager`'s methods to control the component.

| Method | Description |
| --- | --- |
| show() | Show the modal |
| hide() | Hide the modal |
| showDelay(Number ms) | Delay ms to show |
| delayShow(Number ms) | Show modal, then wait for ms to hide |
| changeToTempTitle(String title) | Modify the title as temporary title, until the modal is hidden |




# Frequently Asked Questions



# About Me
My Blog: [王静茜的博客](http://blog.wjingxi.com)


