import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';
import {NavigationContainer} from '@react-navigation/native';

// const Drawer = createDrawerNavigator();

export default class Main extends Component {
  gotoAuthentication() {
    this.props.navigation.push('Authentication');
  }
  gotoChangeInfo() {
    this.props.navigation.navigate('ChangeInfo');
  }
  gotoOrderHistory() {
    this.props.navigation.navigate('OrderHistory');
  }
  // createDrawer = () => (
  //   <Drawer.Navigator>
  //     <Drawer.Screen name="Menu" component={Menu} />
  //     <Drawer.Screen name="Shop" component={Shop} />
  //   </Drawer.Navigator>
  // );
  render() {
    return (
      // this.createDrawer();
      <View>
        <Text>Main component</Text>
        <TouchableOpacity onPress={() => this.gotoAuthentication()}>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
