import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, Platform, ActivityIndicator, FlatList} from 'react-native';
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



  class ChatScreen extends Component {
    constructor(props){
      super(props);
      this.state ={ isLoading: true}
    }
  
    componentDidMount(){
      return fetch('http://192.168.137.1:3000/api/meetups')
        .then((response) => response.json())
        .then((responseJson) => {
  
          this.setState({
            isLoading: false,
            dataSource: responseJson.meetups,
          }, function(){
  
          });
  
        })
        .catch((error) =>{
          console.error(error);
        });
    }
  
    render() {
      if(this.state.isLoading){
        return(
          <View style={styles.CSmainview}>
            <ActivityIndicator/>
          </View>
        )
      }
      return (
        <View style={styles.CSmainview}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}-----{item.description}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    CSmainview: {
        flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
      }
      
  })

  export default ChatScreen;