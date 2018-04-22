import React, {Component} from 'react';
import ListComponent from './../Components/List.Component';
import CallService from './../Services/Call.Service';
//所有Call表页面
export default class AllCall extends Component<{}> {
    //构造器
    constructor(props: any) {
        super(props);
        this.state = {
            keyword: null,
            page: 1,
            result: []
        }
    }

    //构造服务
    callService = new CallService;

    //组建渲染后运行
    componentDidMount() {
        this.callService.searchCall(this.state.page, this.state.keyword)
            .then(data => {
                this.setState({result: data.resultList})
            })
    }

    //渲染
    render() {
        return (
            <ListComponent result={this.state.result}/>
        )
    }
}