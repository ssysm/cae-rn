import * as React from 'react';
import {View, StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Application from './src/Pages/Application';
import CallDetail from './src/Pages/CallDetail';
import Splash from './src/Pages/Splash';
import CallPDF from './src/Pages/CallPDF';

import DrawerComponent from './src/Components/Drawer.Component';

export default class App extends React.Component<{}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <StatusBar hidden={true}/>
                <Router>
                    <Scene key="root">
                        <Scene key="drawer" drawer={true} drawerWidth={200} contentComponent={DrawerComponent}>
                            <Scene key="splash" component={Splash} hideNavBar initial/>
                            <Scene component={Application} key="Application" title="Application"/>
                        </Scene>
                        <Scene component={CallDetail} key="CallDetail" title="详细" />
                        <Scene component={CallPDF} key="CallPDF" title="Call表内容"/>
                    </Scene>
                </Router>
            </View>
        );
    }
}
