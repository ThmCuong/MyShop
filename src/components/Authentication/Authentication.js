import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default class Authentication extends Component {
  goBackToMain() {
    this.props.navigation.pop();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Authentication Component</Text>
        <TouchableOpacity onPress={() => this.goBackToMain()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
