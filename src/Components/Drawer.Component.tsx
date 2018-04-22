import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
//抽屉按钮
const DrawerButton = (props: any) => {
    return (<TouchableOpacity
            onPress={() => {
                Actions[props.scene].call()
            }}
            style={styles.btn}
        >
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
};
//抽屉类
export default class DrawerComponent extends Component<{}> {
    //渲染
    render() {
        return (
            <View style={styles.container}>
                <DrawerButton text="主页" scene="Application"/>
                <DrawerButton text="搜索" scene="Search"/>
                <DrawerButton text="意见反馈" scene="Feedback"/>
            </View>
        )
    }
}
//样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center'
    },
    btn: {
        padding: 20
    }
});