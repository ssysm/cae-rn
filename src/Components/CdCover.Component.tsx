import React,{Component} from "react";
//@ts-ignore-file
import ResponsiveImage from 'react-native-responsive-image';
import {Text, TouchableOpacity} from "react-native";


class CdCover extends Component<{}>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <TouchableOpacity style={{alignItems:'center',marginHorizontal:10}}>
                <ResponsiveImage  source={{uri: this.props.src }} initWidth="138" initHeight="138"/>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }

}

export default CdCover