import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import CallService from './../Services/Call.Service';
import ListComponent from './../Components/List.Component';
//搜索类
export default class Search extends Component<{}> {
    //构造器
    constructor(props: any) {
        super(props);
        this.state = {
            result: [],
            page: 1,
            keyword: null
        };
        //搜索function
        this.search = this.search.bind(this);
    }

    //构造服务
    callService = new CallService;

    //search func
    search(text) {
        this.setState({keyword: text});
        this.callService.searchCall(this.state.page, this.state.keyword)
            .then(data => {
                this.setState({
                    result: data.resultList
                })
            })
    }

    //渲染
    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    onChangeText={this.search}
                    placeholder='搜索歌曲'
                />
                <ListComponent result={this.state.result}/>
            </View>
        )
    }
}
//样式
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});