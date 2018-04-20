import React,{Component} from 'react';
import { WebView } from 'react-native';
export default class CallPDF extends Component{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <WebView
                source={{uri:this.props.callUri}}
                scalesPageToFit={true}/>
        )
    }
}