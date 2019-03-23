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
  import InnerSearchScreen from '../AfterLGNorREGScreens/InnerSearchScreen';



  class SearchScreen extends Component {
    render() {
      return (
        <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
        
          <Header style={styles.HSheader}>
          
          <Body style={{position:'absolute',justifyContent:'center'}}>
          <Title>Search</Title>
          </Body>
          
          </Header>
         
       
          <Content>
          <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />
        
        <InnerSearchScreen />
        
          </Content>
        </Container>
        </StyleProvider>
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff'
      },
      HSheader:{
        ...Platform.select({
          android: {
              backgroundColor: '#000000',
              
          },
      })
      },
      
  })

  export default SearchScreen;