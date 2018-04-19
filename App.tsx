import * as React from 'react';
import {View, StatusBar} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Application from './src/Pages/Application';

import DrawerComponent from './src/Components/Drawer.Component';

export default class App extends React.Component<{}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <StatusBar hidden={true}/>
                <Router>
                    <Scene key="root" drawer={true} drawerWidth={200} contentComponent={DrawerComponent}>
                        <Scene component={Application} key="Application" title="Application" initial/>
                    </Scene>
                </Router>
            </View>
        );
    }
}
