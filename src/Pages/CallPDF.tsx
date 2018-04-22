import React,{Component} from 'react';
import { WebView } from 'react-native';
//Call表PDF浏览(实际就是WebView的wrapper)类
export default class CallPDF extends Component{
    //构造器
    constructor(props:any){
        super(props);
    }
    //渲染
    render(){
        return(
            <WebView
                source={{uri:this.props.callUri}}
                scalesPageToFit={true}/>
        )
    }
}