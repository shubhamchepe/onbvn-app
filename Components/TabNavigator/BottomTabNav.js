import React,{Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import NotificationScreen from '../Screens/NotificationScreen/NotificationScreen';
import PostUploadScreen from '../Screens/PostUploadScreen/PostUploadScreen';
import SearchScreen from '../Screens/SearchScreen/SearchScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import DrawerNav from '../DrawerNavigator/DrawerNav';
import { Ionicons } from '@expo/vector-icons';
import {Icon} from 'native-base'



export const TabNavigator = createBottomTabNavigator(
  {
    Homescreen: {
      screen: () => <HomeScreen/>,
      navigationOptions: {
        tabBarIcon: <Icon name="md-albums" size={30} color="#900" />,
        tabBarLabel:"Home",
      }
    },
    Notificationscreen: {
      screen: () => <NotificationScreen/>,
      navigationOptions: {
        tabBarIcon: <Icon name="md-information-circle" size={30} color="#900" />,
        tabBarLabel:"Notifications",
      }
    },
    Postuploadscreen: {
      screen: (props) => <PostUploadScreen {...props}/>,
      navigationOptions: {
        tabBarIcon: <Icon name="md-add-circle" size={30} color="#900" />,
        tabBarLabel:"Upload",
        tabBarVisible: false
      }
    },
    Searchscreen: {
      screen: () => <SearchScreen/>,
      navigationOptions: {
        tabBarIcon: <Icon name="md-search" size={30} color="#900" />,
        tabBarLabel:"Search",
      }
    },
    Profilescreen: {
      screen: () => <DrawerNav/>,
      navigationOptions: {
        tabBarIcon: <Icon name="md-person" size={30} color="#900" />,
        tabBarLabel:"Profile"
      }
    },
  },
  {
    hideStatusBar: true,
  }
  );

export default createAppContainer(TabNavigator);