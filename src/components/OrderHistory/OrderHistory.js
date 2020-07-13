import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
export default class OrderHistory extends Component {
  goBackToMain() {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'purple'}}>
        <Text>OrderHistory</Text>
        <TouchableOpacity onPress={() => this.goBackToMain()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
