import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>Main Screen</Text>
        <Button
          title="Go to Authentication Screen"
          onPress={() => this.props.navigation.navigate('Authentication')}
        />
      </View>
    );
  }
}
