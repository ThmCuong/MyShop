import React, {Component} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';

import Authentication from './src/components/Authentication/Authentication';
import Main from './src/components/Main/Main.js';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo.js';
// import OrderHistory from './src/components/OrderHistory/OrderHistory.js';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

StatusBar.setHidden(true);

const Stack = createStackNavigator();
const forFade = ({current, closing}) => ({
  cardStyle: {
    opacity: current.process,
  },
});
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: 'black',
            headerStyle: {backgroundColor: 'tomato'},
          }}
          headerMode="float"
          initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: 'Main Screen',
              headerStyle: {backgroundColor: 'black'},
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="ChangeInfo"
            component={ChangeInfo}
            options={{
              title: 'Change Info Screen',

              header: ({scene, previous, navigation}) => {
                const {options} = scene.descriptor;
                const title =
                  options.headerTitle !== undefined
                    ? options.headerTitle
                    : options.title !== undefined
                    ? options.title
                    : scene.route.name;

                return (
                  <View
                    title={title}
                    leftButton={
                      previous ? (
                        <Button onPress={navigation.goBack} />
                      ) : undefined
                    }
                    style={options.headerStyle}
                  />
                );
              },
            }}
          />
          <Stack.Screen name="Authentication" component={Authentication} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
