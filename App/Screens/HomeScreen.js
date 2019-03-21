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
  import GoToChatScreen from '../Components/GoToChatScreen';
  import InnerHomeScreen from '../AfterLGNorREGScreens/InnerHomeScreen';

  class HomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
      let headerTitle = 'Main';
      let headerTitleStyle = { color: 'red' };
      return { headerTitle, headerTitleStyle }
  }
    render() {
      return (
  
        
       
        <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
        
          <Header style={styles.HSheader}>
          <Right>
              <GoToChatScreen />
          </Right>
          <Body>
          <Title>onbvn</Title>
          </Body>
          <Left>
              <Icon size={20} color={'#fff'} name="comments" style={{left: 30}}/>
          </Left>
          </Header>
         
       
          <Content>
          <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
      />
        <InnerHomeScreen imageSource="1" likes="101" />
        <InnerHomeScreen imageSource="2" likes="121" />
        <InnerHomeScreen imageSource="3" likes="131" />
        
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

  export default HomeScreen;