import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator, TouchableOpacity,StatusBar,ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';


export default class HomeScreen extends Component {
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
        <View style={styles.Header}>
        <Text style={{fontFamily: 'Montserrat-Black',fontSize:15,color:'#fff'}}> Mitra Samachar </Text>
        </View>
        <ScrollView style={{zIndex:-4}}>
        <View style={styles.NewsFeed}>
          <View style={styles.ProfileInfo}></View>
          <View style={styles.PostContainer}></View>
          <View style={styles.ResponseContainer}></View>
        </View>
        </ScrollView>
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
        alignItems:'center'
    },
    Header:{
      width:widthPercentageToDP('100%'),
      height:heightPercentageToDP('10%'),
      backgroundColor:'#252525',
      position:'absolute',
      alignItems:'center',
      justifyContent:'center'
    },
    NewsFeed:{
      width:widthPercentageToDP('98%'),
      height:heightPercentageToDP('50%'),
      backgroundColor:'#E2E0E0',
      alignItems:'center',
      zIndex:-4,
      marginTop:heightPercentageToDP('12%')
    },
    ProfileInfo:{
      width:widthPercentageToDP('98%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#F40F0F'
    },
    PostContainer:{
      width:widthPercentageToDP('98%'),
      height:heightPercentageToDP('34%'),
      backgroundColor:'#E2E0E0'
    },
    ResponseContainer:{
      width:widthPercentageToDP('98%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#23C436'
    }
})


