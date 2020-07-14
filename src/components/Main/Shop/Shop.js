import React, {Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Header from './Header';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    };
  }
  openMenu() {
    // this.props.navigation.toggleDrawer();
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header onOpen={this.openMenu.bind(this)} />
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTinColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </View>
    );
  }
}

export default Shop;
