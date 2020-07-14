import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon
import Home from './Home/Home';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import Search from './Search/Search';
import Header from './Header';
import {MyTabBar} from './MyTabBar';
import {color} from 'react-native-reanimated';
const Tab = createBottomTabNavigator();
const {height, width} = Dimensions.get('window');

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
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'mediumseagreen',
            inactiveTintColor: '#fff',
            style: {
              backgroundColor: 'saddlebrown',
            },
            showLabel: true,
          }}

          // tabBar={(props) => <MyTabBar {...props} />}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => {
                let image = focused
                  ? require('../../../media/appIcon/home.png')
                  : require('../../../media/appIcon/home0.png');
                return <Image source={image} style={styles.iconStyle} />;
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarLabel: 'Cart',
              tabBarIcon: ({focused}) => {
                let image = focused
                  ? require('../../../media/appIcon/cart.png')
                  : require('../../../media/appIcon/cart0.png');
                return <Image source={image} style={styles.iconStyle} />;
              },
              tabBarBadge: 2,
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({focused}) => {
                let image = focused
                  ? require('../../../media/appIcon/search.png')
                  : require('../../../media/appIcon/search0.png');
                return <Image source={image} style={styles.iconStyle} />;
              },
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarLabel: 'Contact',
              tabBarIcon: ({focused}) => {
                let image = focused
                  ? require('../../../media/appIcon/contact.png')
                  : require('../../../media/appIcon/contact0.png');
                return <Image source={image} style={styles.iconStyle} />;
              },
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

export default Shop;

const styles = StyleSheet.create({
  iconStyle: {
    width: width / 12,
    height: width / 12,
  },
});
