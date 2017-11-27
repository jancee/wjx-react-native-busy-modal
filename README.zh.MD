![](https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png)

# wjx-react-native-busy-modal

[![npm version](https://badge.fury.io/js/wjx-react-native-busy-modal.svg)](https://badge.fury.io/js/wjx-react-native-busy-modal)

React Native的一个组件，提示用户正在加载的弹出框。
该组件允许你，自定义等待动画、模态动画、文字提示，等等。

# 特性

* 可自定义

* 简单的调用

* 无侵入

# 效果
![on IPhone](./images/gif-ios.gif)

# 例程

例程在 `example` 文件夹下, 你可以这样来运行：
在该组件根目录下, 执行：
```
npm install
cd example && npm install && react-native run-ios
```



# 安装

你可以使用 NPM 或者 yarn 来安装：

```
npm install --save wjx-react-native-busy-modal
```

or

```
yarn add wjx-react-native-busy-modal
```



# 使用

在APP的根节点的`<View>`下面，添加 `<BusyModal/>` 子节点

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

当需要使用的时候，调用 `BusyModalManagers` 类的方法

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



# 可用属性

| 属性名 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| title | string | "Loading" | 标题文字 |
| containerStyle | object | {} | 窗口 style |
| imageStyle | object | {} | 图片 Style |
| titleStyle | object | {} | 标题 Style |
| animated | boolean | true | 渐入渐出动画 |
| enableCancelOnClickBlank | boolean | false | 用户在空白处点击，则隐藏弹窗 |
| enableCancelOnClickModal | boolean | false | 用户在弹窗点击，则隐藏弹窗 |
| gifInterval | number | 100 | 当自定义动画时，设置每张图片的间隔时间(ms) |
| gifImages | array | 一个默认的房子的图片列表 | 当自定义动画时，设置图片列表 |




# 方法

你可以使用 `BusyModalManager` 的类方法来控制组件。

| 方法 | 描述 |
| --- | --- |
| show() | 显示 |
| hide() | 隐藏 |
| showDelay(Number ms) | 延时指定时间显示 |
| delayShow(Number ms) | 立即显示，并在指定时间后隐藏 |
| changeToTempTitle(String title) | 临时修改标题名, 下一次显示窗口时失效，恢复到默认值 |




# Q&A



# 关于我
我的博客链接: [王静茜的博客](http://blog.wjingxi.com)


