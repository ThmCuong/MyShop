import React, {Component} from 'react';
import {View, Text, StatusBar} from 'react-native';

import Authentication from './src/components/Authentication/Authentication';
import Main from './src/components/Main/Main.js';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
// import ChangeInfor from './src/components/ChangeInfor/ChangeInfor.js';
import OrderHistory from './src/components/OderHistory/OrderHistory.js';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

StatusBar.setHidden(true);

const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Change_info" component={ChangeInfor} />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
      // <View>
      //   <Text>Cuong dz!1234</Text>
      // </View>
    );
  }
}
