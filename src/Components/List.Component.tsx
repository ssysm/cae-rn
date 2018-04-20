import React,{Component} from 'react';
import { List, ListItem } from "react-native-elements";
import { View, Text, FlatList } from "react-native";
import { Actions } from 'react-native-router-flux';
import CallService from './../Services/Call.Service';

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

export default class ListComponent extends Component<{}>{
    constructor(props:any){
        super(props);
    }

    callService = new CallService;


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