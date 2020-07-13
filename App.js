import React, {Component} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';

import Authentication from './src/components/Authentication/Authentication';
import Main from './src/components/Main/Main.js';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo.js';
// import OrderHistory from './src/components/OrderHistory/OrderHistory.js';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import {Menu} from './src/components/Main/Menu';
import Shop from './src/components/Main/Shop/Shop';
import {DrawerContent} from './src/components/DrawerScreen/DrawerContent';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

StatusBar.setHidden(false);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.process,
  },
});
export default class App extends Component {
  createDrawer = () => (
    <Drawer.Navigator drawerContent={(props) => <Menu {...props} />}>
      {/* <Drawer.scene name="Main1" component={Main} /> */}
      {/* <Drawer.Screen name="Menu" component={Menu} /> */}
      <Drawer.Screen name="Shop" component={Shop} />
    </Drawer.Navigator>
  );
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Homie"
            children={this.createDrawer}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfo} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
