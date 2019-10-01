import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator } from "react-navigation";
import LoginScreen1 from './Components/Screens/LoginScreen1';
import RegisterScreen2 from './Components/Screens/RegisterScreen/RegisterScreen2';
import RegisterScreen3 from './Components/Screens/RegisterScreen/RegisterScreen3';
import HomeScreen from './Components/Screens/HomeScreen/HomeScreen';
import NotificationScreen from './Components/Screens/NotificationScreen/NotificationScreen';
import PostUploadScreen from './Components/Screens/PostUploadScreen/PostUploadScreen';
import SearchScreen from './Components/Screens/SearchScreen/SearchScreen';
import ProfileScreen from './Components/Screens/ProfileScreen/ProfileScreen';
import TabNavigator from './Components/TabNavigator/BottomTabNav';
import {Root} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

class App extends React.Component {
constructor(){
    super();
    this.state={
      fontLoaded:false
    }
  }
  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({fontLoaded:true})
  }
  render(){
    if(!this.state.fontLoaded){
      return <AppLoading/>
    }
    return (
      <Root>
        <AppContainer/>
      </Root>
    );
    }
  
}


const AppContainer = createStackNavigator({
  Loginscreen1: {
    screen: LoginScreen1,
    navigationOptions: {
      header:null
    }
  },
  Registerscreen2: {
    screen: RegisterScreen2,
    navigationOptions: {
      header:null
    }
  },
  Registerscreen3: {
    screen: RegisterScreen3,
    navigationOptions: {
      header:null
    }
  },
  Tabnav: {
    screen: TabNavigator,
    navigationOptions: {
      header:null
    }
  },
},{initialRouteName:'Loginscreen1'})

export default createAppContainer(AppContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
