import React, {Component} from 'react';
import {ScrollView, View, Text, Linking , StyleSheet,TouchableOpacity} from 'react-native';
import CallService from './../Services/Call.Service';
import ResponsiveImage from 'react-native-responsive-image';
import {Actions} from 'react-native-router-flux';
import config from './../../config';
//Call表详细
class Detail extends Component<{}>{
    constructor(props:any){
        super(props);
    }
    render(){
        return (
            <View style={styles.container} >
                <View>
                    <ResponsiveImage source={{uri: this.props.data.song.songCover}} initWidth="312" initHeight="312"/>
                </View>
                <View>
                    <Text style={styles.title}>{this.props.data.song.songName}</Text>
                </View>
                <View style={styles.flexRow}>
                    <View style={styles.flexColumn}>
                        <Text style={styles.helperText}>歌手: {this.props.data.song.songOwner}</Text>
                        <Text style={styles.helperText}>发售时间: {this.props.data.song.songSellTime}</Text>
                    </View>
                    <View style={styles.flexColumn}>
                        <Text style={styles.helperText}>Call表版本: {this.props.data.callVersion}</Text>
                        <Text style={styles.helperText}>更新时间: {this.props.data.song.songLastModifyTime}</Text>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row',padding:25,}}>
                    <TouchableOpacity
                        style={styles.detailBtn}
                        onPress={()=>{
                            if(this.props.data.song.songVideo === 0){
                                alert('该歌曲的视频教学还未完成噢')
                            }else{
                                Linking.openURL(config.videoLink+this.props.data.song.songVideo)
                            }
                        }}
                    >
                        <Text style={{fontSize:24}}>视频教学</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.detailBtn}
                        onPress={()=>{Actions.push('CallPDF',{callUri:this.props.data.callSource})}}
                    >
                        <Text style={{fontSize:24}}>查看Call表</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
//主类
export default class CallDetail extends Component<{}> {
    //构造器
    constructor(props: any) {
        super(props);
        this.state = {
            result: undefined
        };
    }
    //构造服务
    callService = new CallService;
    //组建渲染后运行
    componentDidMount() {
        this.callService.getCallDetail(this.props.songId)
            .then(data => {
                this.setState({
                    result: data.result
                })
            })
    }
    //渲染
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.result ? <Detail data={this.state.result}/> : null
                    }
                </ScrollView>
            </View>
        )
    }
}
//样式
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent:'center'
    },
    title:{
        fontSize:24,
        fontWeight:"bold",
        justifyContent:'center',
        padding:15
    },
    flexRow:{
        flex:1,
        flexDirection:"row",
        justifyContent: 'space-between',
    },
    flexColumn:{
        flex:1,
        flexDirection:"column"
    },
    helperText:{
        padding:5,
        fontSize:14
    },
    detailBtn:{
        backgroundColor:'#f0f0f0',
        padding:15,
        borderRadius:8,
        margin:5
    },

});