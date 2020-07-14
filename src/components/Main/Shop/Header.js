import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import ic_logo from '../../../media/appIcon/ic_logo.png';
import ic_menu from '../../../media/appIcon/ic_menu.png';
const {height} = Dimensions.get('window');

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image source={ic_menu} style={styles.iconStyle} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Wearing a Dress</Text>
          <Image source={ic_logo} style={styles.iconStyle} />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="What do you want to buy"
        />
      </View>
    );
  }
}

export default Header;
{
  /* <TouchableOpacity onPress={this.props.onOpen}>
<Text>Open Menu</Text>
</TouchableOpacity> */
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 8,
    backgroundColor: 'mediumseagreen',
    padding: 10,
    justifyContent: 'space-around',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    height: height / 23,
    backgroundColor: '#FFF',
    paddingLeft: 10,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  titleStyle: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
});
