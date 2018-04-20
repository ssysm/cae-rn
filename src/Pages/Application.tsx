import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, View,} from 'react-native';
import CallService from './../Services/Call.Service';
import HelperIcon from './../Components/HelperIcon.Component';
import CdCover from './../Components/CdCover.Component';
import {Actions} from 'react-native-router-flux';

export default class Application extends Component<{}> {
    constructor(props: any) {
        super(props);
        this.state = {
            red: null,
            latest: null
        }
        this.handlePushEvent = this.handlePushEvent.bind(this);
    }

    callService = new CallService;

    componentDidMount() {
        this.callService.getIndex()
            .then(data => {
                this.setState({
                    red: data.red,
                    latest: data.newest
                })
            })
    }

    handlePushEvent(id: any) {
        Actions.push('CallDetail', {songId: id})
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.helperRow}>
                    <HelperIcon src={require("./../../assets/img/img_test_chika.png")} text="所有歌单" onPress={()=>{Actions.push('AllCall')}}/>
                    <HelperIcon src={require("./../../assets/img/img_test_you.png")} text="BD系列"/>
                    <HelperIcon src={require("./../../assets/img/img_test_riko.png")} text="小队系列"/>
                </View>
                <View style={styles.redRow}>
                    <Text style={styles.redText}>热门歌曲</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {this.state.red ? this.state.red.map((data: object, i: number) => {
                            return (
                                <CdCover key={i} data={data} push={this.handlePushEvent}/>
                            )
                        }) : null}
                    </ScrollView>
                </View>
                <View style={styles.latest}>
                    <Text style={styles.redText}>最新更新</Text>
                    <View style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {this.state.latest ? this.state.latest.map((data: object, i: number) => {
                            return (
                                <CdCover data={data} key={i} push={this.handlePushEvent}/>
                            )
                        }) : null}
                    </View>
                </View>
                <View style={{height: 50}}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal: 15,
        paddingBottom: 45
    },
    redText: {
        padding: 15,
        color: '#ff000f'
    },
    helperRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        height: 170
    },
    redRow: {
        paddingVertical: 20
    },
    latest: {
        flex: 1,
    }
});