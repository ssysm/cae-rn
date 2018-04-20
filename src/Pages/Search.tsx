import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements';
import CallService from './../Services/Call.Service';
import ListComponent from './../Components/List.Component';
export default class Search extends Component<{}>{
    constructor(props: any) {
        super(props);
        this.state={
            result:[],
            page:1,
            keyword:null
        }
        this.search = this.search.bind(this);
    }

    callService = new CallService;

    search(text){
        this.setState({keyword:text})
        this.callService.searchCall(this.state.page,this.state.keyword)
        .then(data=>{
            this.setState({
                result : data.resultList
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    onChangeText={this.search}
                    placeholder='搜索歌曲'
                    />
                    <ListComponent result={this.state.result} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})