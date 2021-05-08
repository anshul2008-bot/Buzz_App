import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from './screens/Instagram';
import Facebook from './screens/Facebook';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer/>
    );
  }
}

var switchTab = createBottomTabNavigator({
  Facebaook : {screen : Facebook},
Instagram : {screen : Instagram}  
})
const AppContainer = createAppContainer(switchTab)