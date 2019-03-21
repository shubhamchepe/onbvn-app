import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
    createDrawerNavigator,
    createBottomTabNavigator,
    createStackNavigator,
    withNavigation
  } from 'react-navigation';

class HomeScreen1 extends Component {
    static navigationOptions = ({navigation}) => {
      let headerTitle = 'Main';
      return { headerTitle }
  }
  
    render() {
      return (
        <View style={styles.HS1mainview}>
        <Text style={{color:'#000000'}}>Home Screen1</Text>
        
      </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    HS1mainview: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
      }
  })

  export default HomeScreen1;