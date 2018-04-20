import React,{Component} from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const DrawerButton = (props:any)=>{
    return(<TouchableOpacity onPress={()=>{Actions[props.scene].call()}} style={styles.btn}><Text>{props.text}</Text></TouchableOpacity>)
};

export default class DrawerComponent extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <DrawerButton text="Home" scene="Application"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'transparent',
        alignItems:'center'
    },
    btn:{
        padding:20
    }
});