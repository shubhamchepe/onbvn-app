import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    withNavigation
  } from 'react-navigation';
  import SplashScreen from '../Screens/SplashScreen';
  import WelcomeScreens from '../Screens/WelcomeScreens';




  class SplashToWelcomeScreen extends Component {
    constructor(props) {
      super(props);
      this.state = { currentScreen: 'SplashScreen' }
  
      // Toggle the state every second
      setTimeout(() => (
        this.setState({ currentScreen: 'WelcomeScreens' })
      ), 2000);
    }
  
    render() {
      const { currentScreen } = this.state
      let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen/> : <WelcomeScreens/>
      return mainScreen
      }
  
    }

  export default SplashToWelcomeScreen;