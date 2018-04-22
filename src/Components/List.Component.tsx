import React,{Component} from 'react';
import { List, ListItem } from "react-native-elements";
import { FlatList } from "react-native";
import { Actions } from 'react-native-router-flux';
//列表卡片
const MessageCard = (data)=>{
    return(
        <ListItem
          title={data.item.songName}
          subtitle={data.item.songOwner}
          avatar={{uri:data.item.songCover}}
          onPress={()=>{
              Actions.push('CallDetail',{songId:data.item.songId})
          }}
      />
    )
};
//列表类
export default class ListComponent extends Component<{}>{
    //构造器
    constructor(props:any){
        super(props);
    }
    //渲染
    render(){
        return(
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
                data={this.props.result}
                keyExtractor={item => item.songId}
                onEndReachedThreshold={50}
                renderItem={MessageCard}
            />
        </List>
        )
    }
}