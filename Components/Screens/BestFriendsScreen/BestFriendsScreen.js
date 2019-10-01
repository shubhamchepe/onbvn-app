import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator, TouchableOpacity,StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';


export default class BestFriendsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false
        };
      }
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
          'Roboto': require('../../../assets/fonts/Roboto.ttf'),
          'Roboto_medium': require('../../../assets/fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({fontLoaded:true})
      }

  render() {
    return (
      <Container>
        <StatusBar hidden />
           {this.state.fontLoaded == true ?(
        <Container>
          <StatusBar hidden />
        <View style={styles.container}>
           <Text style={{fontFamily: 'Montserrat-Black',fontSize:15,color:'#fff'}}> BestFriendsScreen </Text>
        </View>
        </Container>
        
        ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#252525',
        flexDirection: 'column'
    }
})


