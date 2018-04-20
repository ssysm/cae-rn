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

export default CdCover