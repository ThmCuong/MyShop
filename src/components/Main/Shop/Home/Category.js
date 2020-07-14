import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';

import litteIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import midiIcon from '../../../../media/temp/midi.jpg';

const {height, width} = Dimensions.get('window');

class Category extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={styles.textStyle}>List of Category</Text>
        </View>
        <View style={{flex: 4, justifyContent: 'flex-end', borderWidth: 1}}>
          <Swiper
            showsPagination
            width={imageWidth}
            height={imageHeight}
            justifyContent="center">
            <ImageBackground source={litteIcon} style={styles.imageStyle}>
              <Text style={styles.cattleTilte}>Little Dress</Text>
            </ImageBackground>
            <ImageBackground source={maxiIcon} style={styles.imageStyle}>
              <Text style={styles.cattleTilte}>Maxi Dress</Text>
            </ImageBackground>
            <ImageBackground source={midiIcon} style={styles.imageStyle}>
              <Text style={styles.cattleTilte}>Midi Dress</Text>
            </ImageBackground>
          </Swiper>
        </View>
      </View>
    );
  }
}

export default Category;

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.35,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 25,
    color: 'brown',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cattleTilte: {
    fontSize: 20,
    fontFamily: 'Cochin',
    color: 'gray',
    fontWeight: 'bold',
  },
});
