import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ImageBackground, ScrollView, Dimensions, Image, StatusBar, TouchableOpacity, ListView, Platform, ActivityIndicator,FlatList} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  withNavigation
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import InnerHomeScreen from './App/AfterLGNorREGScreens/InnerHomeScreen';
import {Root} from 'native-base';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { fetchMeetups } from './constants/api';
import { CustomButton } from './App/Components/CustomButton';
import axios from 'react-native-axios';
import SplashScreen from './App/Screens/SplashScreen';
import WelcomeScreens from './App/Screens/WelcomeScreens';
import LoginScreen from './App/Screens/LoginScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import RegisterScreen1 from './App/Screens/RegisterScreen1';
import RegisterScreen2 from './App/Screens/RegisterScreen2';
import RegisterScreen3 from './App/Screens/RegisterScreen3';
import HomeScreen1 from './App/Screens/HomeScreen1';
import HomeScreen from './App/Screens/HomeScreen';
import ProfileScreen from './App/Screens/ProfileScreen';
import NotificationScreen from './App/Screens/NotificationScreen';
import SearchScreen from './App/Screens/SearchScreen';
import ChatScreen from './App/Screens/ChatScreen';
import SplashToWelcomeScreen from './App/Screens/SplashToWelcomeScreen';




const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {
  render() {
    
    return (
       <Root>
      <AppContainer>
      <SplashScreen />
      <WelcomeScreens />
      <LoginScreen />
      <RegisterScreen1 />
      <HomeScreen1 />
      <HomeScreen />
      <ProfileScreen />
      <NotificationScreen />
      <SearchScreen />
      <ChatScreen />
      <SplashToWelcomeScreen />
      </AppContainer>
      </Root>

    );
  }
}


  const DashboardTabNavigator = createBottomTabNavigator(
    {
     Homescreen: {
       screen: HomeScreen,
       navigationOptions: {
         tabBarIcon: <Icon name="home" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
       }
     },
     Profilescreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="user" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
    Notificationscreen: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="exclamation-circle" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
    Searchscreen: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="search" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
  //  Chatscreen: {
   //   screen: ChatScreen,
    //  navigationOptions: {
    //    tabBarIcon: <Icon name="comments" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
     // }
   // },
    },
    
    {
      
      animationEnabled: true,
      swipeEnabled: true, 
      tabBarOptions: "bottom",
      tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: '#696969',
      
      labelStyle: {
        fontSize: 12,
        fontFamily: 'montserratmedium',
        fontWeight: 'bold',
        color: '#ffffff',
        bottom: 5

      },
      
      
      style: {
        backgroundColor: '#000000',
      },
      
    },
    
  }
  );
  

  

const MainNavigator = createStackNavigator({
  Splashtowelcome: {
    screen: SplashToWelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Splashscreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Welcomescreens: {
    screen: WelcomeScreens,
    navigationOptions: {
      header: null
    }
  },
  Loginscreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Registerscreen: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  },
  Homescreen: {
    screen: HomeScreen,
    
  },
  Homescreen1: {
    screen: DashboardTabNavigator,
    navigationOptions: {
      header: null
    },
  },
  Chatscreen: {
    screen: ChatScreen,
    
  },
  Registerscreenstep1: {
    screen: RegisterScreen1,
    navigationOptions: {
      header: null
    }
  },
  Registerscreenstep2: {
    screen: RegisterScreen2,
    navigationOptions: {
      header: null
    }
  },
  Registerscreenstep3: {
    screen: RegisterScreen3,
    navigationOptions: {
      header: null
    }
  },
  
},
{
  headerMode: null,
});

const AppContainer = createAppContainer(MainNavigator);

