import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import ListComponent from './../Components/List.Component';
import CallService from './../Services/Call.Service';

export default class AllCall extends Component<{}>{
    constructor(props:any){
        super(props);
        this.state={
            keyword:null,
            page:1,
            result:[]
        }
    }

    callService = new CallService;

    componentDidMount(){
        this.callService.searchCall(this.state.page,this.state.keyword)
        .then(data=>{
            this.setState({result:data.resultList})
        })
    }

    render(){
        return(
            <ListComponent result={this.state.result}/>
        )
    }
}