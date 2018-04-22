import React,{Component} from 'react';
import {KeyboardAvoidingView,TextInput,Text,TouchableOpacity,StyleSheet} from 'react-native';
import FeedbackService from "../Services/Feedback.Service";
//Feedback Page class
export default class Feedback extends Component<{}>{
    //构造器
    constructor(props:any){
        super(props);
        this.state={
            title:null,
            content:null
        };
        //
        this.submit = this.submit.bind(this)
    }

    //构造服务
    feedbackService = new FeedbackService;
    //渲染
    render(){
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TextInput style={{height: 50,flexDirection:"column"}}
                               onChangeText={(title) => this.setState({title})}
                               value={this.state.title}
                               placeholder={"标题"}
                    />
                    <TextInput
                        style={{flexDirection:"column"}}
                        placeholder={"内容"}
                        multiline = {true}
                        numberOfLines = {10}
                        onChangeText={(content) => this.setState({content})}
                        value={this.state.content}
                        editable = {true}
                        maxLength = {40}
                    />
                <TouchableOpacity
                    style={{ backgroundColor:'#f0f0f0', padding:15, borderRadius:8, margin:5,justifyContent:'center',alignItems:'center'}}
                    onPress={this.submit}
                >
                    <Text>提交</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
    //发送信息
    //@return:void
    submit():void{
        this.feedbackService.feedback(this.state.title,this.state.content)
            .then(data=>{
                if(data.successed){
                    this.setState({
                        title:null,
                        content:null
                    });
                    alert('提交成功!')
                }else{
                    alert(JSON.stringify(data));
                }
            })
    }
}
//样式
const styles = StyleSheet.create({
   container:{
       padding:25,
       flex:1,
       flexDirection:'column',
   },
});