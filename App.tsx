import * as React from 'react';
import {View, StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Application from './src/Pages/Application';
import CallDetail from './src/Pages/CallDetail';
import Splash from './src/Pages/Splash';
import CallPDF from './src/Pages/CallPDF';
import Search from './src/Pages/Search';
import AllCall from './src/Pages/AllCall';
import DrawerComponent from './src/Components/Drawer.Component';

export default class App extends React.Component<{}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <StatusBar hidden={true}/>
                <Router>
                    <Scene key="root" title="Aqours Callbook RN">
                        <Scene key="drawer" drawer={true} drawerWidth={200} contentComponent={DrawerComponent}>
                            <Scene key="splash" component={Splash} hideNavBar initial/>
                            <Scene component={Application} key="Application" title="主页"/>
                        </Scene>
                        <Scene component={CallDetail} key="CallDetail" title="详细" />
                        <Scene component={CallPDF} key="CallPDF" title="Call表内容"/>
                        <Scene component={Search} key="Search" title="搜索" />
                        <Scene component={AllCall} key="AllCall" title="所有歌单" />
                    </Scene>
                </Router>
            </View>
        );
    }
}
