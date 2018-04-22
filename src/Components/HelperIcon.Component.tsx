import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
//顶部助手按钮
const HelperIcon = (props: any) => {
    return (
        <TouchableOpacity style={styles.helperIcon} {...props}>
            <Image source={props.src} style={styles.helperImage}/>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
};
//样式
const styles = StyleSheet.create({
    helperImage: {
        height: 65,
        width: 65
    },
    helperIcon: {
        alignItems: 'center'
    }
});
export default HelperIcon;
