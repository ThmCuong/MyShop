import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
export default class Authentication extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Text>CUong dz</Text>
        <Button
          title=" Go to OrderHistory"
          onPress={() => {
            this.props.navigation.navigate('OrderHistory');
          }}
        />
      </View>
    );
  }
}
