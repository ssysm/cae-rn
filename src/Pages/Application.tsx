import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, View,} from 'react-native';
import CallService from './../Services/Call.Service';
import HelperIcon from './../Components/HelperIcon.Component';
import CdCover from './../Components/CdCover.Component';

export default class Application extends Component<{}> {
    constructor(props: any) {
        super(props);
        this.state = {
            red: null,
            latest: null
        }
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

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.helperRow}>
                    <HelperIcon src={require("./../../assets/img/img_test_chika.png")} text="所有歌单"/>
                    <HelperIcon src={require("./../../assets/img/img_test_you.png")} text="BD系列"/>
                    <HelperIcon src={require("./../../assets/img/img_test_riko.png")} text="小队系列"/>
                </View>
                <View style={styles.redRow}>
                    <Text style={styles.redText}>热门歌曲</Text>
                    <ScrollView style={styles.row} horizontal={true}>
                        {this.state.red ? this.state.red.map((data: object, i: number) => {
                            return (
                                <CdCover src={data.songCover} key={i} text={data.songName}/>
                            )
                        }) : null}
                    </ScrollView>
                </View>
                <View style={styles.latest}>
                    <Text style={styles.redText}>最新更新</Text>
                    <View style={{justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap'}}>
                    {this.state.latest ? this.state.latest.map((data: object, i: number) => {
                        return (
                            <CdCover src={data.songCover} key={i} text={data.songName}/>
                        )
                    }) : null}
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingHorizontal:15,
        paddingBottom:45
    },
    redText:{
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
        height: 150
    },
    redRow: {
        paddingVertical: 20
    },
    latest: {
        flex: 1,
    }
});