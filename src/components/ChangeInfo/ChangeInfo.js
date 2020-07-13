import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
export default class ChangeInfo extends Component {
  goBackToMain() {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Change Info Screen</Text>
        <TouchableOpacity onPress={() => this.goBackToMain()}>
          <Text>Go back to main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
