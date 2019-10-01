import React,{Component} from 'react';
import { createBottomTabNavigator, createAppContainer ,createDrawerNavigator, DrawerNavigator} from 'react-navigation';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen';
import BestFriendsScreen from '../Screens/BestFriendsScreen/BestFriendsScreen';


export const DrawerNav = createDrawerNavigator(
  {
    Profilescreen: {
      screen: (props) => <ProfileScreen {...props}/>,
      navigationOptions: {
        drawerLabel:"Profile",
      }
    },
    Settingscreen: {
      screen: () => <SettingScreen/>,
      navigationOptions: {
        drawerLabel:"Settings",
      }
    },
    Editprofilescreen: {
      screen: (props) => <EditProfileScreen {...props}/>,
      navigationOptions: {
        drawerLabel:"Edit Profile",
      }
    },
    Bestfriendsscreen: {
      screen: () => <BestFriendsScreen/>,
      navigationOptions: {
        drawerLabel:"Best Friends",
      }
    },
  },
  {
    drawerPosition:'right'
  }
  );

export default createAppContainer(DrawerNav);