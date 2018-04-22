import React,{Component} from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';
export default class About extends Component<{}>{
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.text}>
                        本App是Aqours Caller*的衍生版,使用React Native栈重构{"\n"}
                        {"\n"}
                        本App纯属兴趣爱好产物,用于call表交流与学习,不作任何商业用途.{"\n"}
                        如果有好的建议和意见,可以在下列的联系方式中联系我们,谢谢.{"\n"}
                        {"\n"}
                        联系方式:{"\n"}
                        App作者:美东矿业{"\n"}
                        邮箱:pr@theeditorstudio.com{"\n"}
                        Github:@ssysm{"\n"}
                        {"\n"}
                        原Aqours Caller作者:灰灰{"\n"}
                        邮箱:723290367@qq.com{"\n"}
                        微博:@渡边家的小灰灰{"\n"}
                        {"\n"}
                        Call表作者:kuma{"\n"}
                        微博:@kuma_loveliver{"\n"}
                    </Text>
                    <Text style={styles.text}>
                        This App is derivative version of Aqours Caller* ,rebuild using React Native.{"\n"}
                        {"\n"}
                        This App is purely a hobby product, used for callbook exchange and learning, without any commercial use.{"\n"}
                        If you have any advice or feedback, you can find us down below.{"\n"}
                        {"\n"}
                        Contact Info:{"\n"}
                        App Author:NA Cryptocurrency Mining Group(ssysm){"\n"}
                        E-mail:pr@theeditorstudio.com{"\n"}
                        Github:@ssysm{"\n"}
                        {"\n"}
                        Original Aqours Caller Author:灰灰{"\n"}
                        E-mail:723290367@qq.com{"\n"}
                        Weibo:@渡边家的小灰灰{"\n"}
                        {"\n"}
                        Callbook Author:kuma{"\n"}
                        Weibo:@kuma_loveliver{"\n"}
                    </Text>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:25
    },
    text:{
        fontWeight:"400",
        fontSize:18,
    }
});