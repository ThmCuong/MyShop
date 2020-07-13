import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
export function Menu(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Menu Content</Text>
        </View>
        <Drawer.Section>
          <DrawerItem
            label="Go to Authentication"
            onPress={() => {
              props.navigation.navigate('Authentication');
            }}
          />
          <DrawerItem
            label="Go to ChangeInfo"
            onPress={() => {
              props.navigation.navigate('ChangeInfo');
            }}
          />
          <DrawerItem
            label="Go to OrderHistory"
            onPress={() => {
              props.navigation.navigate('OrderHistory');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}
