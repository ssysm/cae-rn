import React, {Component} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
const launchScreen = require('./../../assets/img/call_welcome.jpg');

export default class Splash extends Component<{}> {
    constructor(props: any) {
        super(props);
        this.state={
            width:null,
            height:null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            Actions['Application'].call()
        }, 3000);
    }

    render() {
        return (
            <View style={styles.splashView}>
                <Image style={styles.img} source={launchScreen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    splashView: {
        flex:1,
        flexDirection: "row"
    },
    img: {
        flex:1,
        width: undefined,
        height: undefined,
        resizeMode:'contain'
    }
});