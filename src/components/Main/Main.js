import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
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
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Main Screen</Text>
        <TouchableOpacity onPress={() => this.gotoAuthentication()}>
          <Text>Go to Authentication</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.gotoOrderHistory()}>
          <Text>Go to OrderHistory</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.gotoChangeInfo()}>
          <Text>Go to ChangeInfo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
