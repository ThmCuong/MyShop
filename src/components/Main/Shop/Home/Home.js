import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colection from './Colection';
import Category from './Category';
class Home extends Component {
  render() {
    return (
      <View style={styles.wraper}>
        <Colection />
        <Category />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
    backgroundColor: '#DBDBDB',
  },
});
