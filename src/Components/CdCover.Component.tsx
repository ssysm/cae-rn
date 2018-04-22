import React,{Component} from "react";
import ResponsiveImage from 'react-native-responsive-image';
import {Text, TouchableOpacity} from "react-native";
//CD封面类
export default class CdCover extends Component<{}>{
    //构造器
    constructor(props:any) {
        super(props);
    }
    //渲染
    render(){
        return(
            <TouchableOpacity
                onPress={()=>{
                    this.props.push(this.props.data.songId)
                }}
                style={{alignItems:'center',marginHorizontal:10,paddingVertical:10}}>
                <ResponsiveImage  source={{uri: this.props.data.songCover }} initWidth="138" initHeight="138"/>
                <Text>{this.props.data.songName}</Text>
            </TouchableOpacity>
        )
    }

}