import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import bannerImage from '../../../../media/temp/banner.jpg';
const {height, width} = Dimensions.get('window');

class Colection extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.textStyle}>Colection</Text>
        </View>
        <View style={{flex: 4}}>
          <Image source={bannerImage} style={styles.imageStyle} />
        </View>
      </View>
    );
  }
}

export default Colection;

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 25,
    color: 'brown',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
  },
});
