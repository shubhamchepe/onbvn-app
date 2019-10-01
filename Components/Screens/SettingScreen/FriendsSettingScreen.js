import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator, TouchableOpacity,StatusBar,TextInput,AsyncStorage,
  ScrollView,Modal,TouchableHighlight} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';



export default class FriendsSettingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false,
            modal1Visible: false,
            modal2Visible: false,
            UpdateBio:'',
            UpdateLink1:'',
            UpdateLink2:'',
            User:{}
        };
        this.GetIdOfLoggedInUser = this.GetIdOfLoggedInUser.bind(this)
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
        this.GetIdOfLoggedInUser();
      }

     
      GetIdOfLoggedInUser = async() => {
        try{
          let InfoFromAsync = await AsyncStorage.getItem('LoginToken');
          InfoFromAsync = JSON.parse(InfoFromAsync);
          GetUserId = InfoFromAsync.UserID;
           console.log(GetUserId);
           this.setState({UserIDFromAsync:GetUserId})
           fetch(`http://192.168.245.2:3000/getUserById/${GetUserId}`)
    .then((response) => response.json())
    .then((responseJson) => {
     // return responseJson.firstname;
      console.log(responseJson.firstname);
      this.setState({User:responseJson})
    })
        } catch(error){
            console.log(error);
        }
      }

      setModal1Visible = (visible) => {
        this.setState({modal1Visible: visible});
      }

      setModal2Visible = (visible) => {
        this.setState({modal2Visible: visible});
      }

  render() {
    return (
      <Container>
        <StatusBar hidden />
           {this.state.fontLoaded == true ?(
        <Container>
          <StatusBar hidden />
        <View style={styles.container}>
           {/* <Text style={{fontFamily: 'Montserrat-Black',fontSize:15,color:'#fff'}}> EditProfileScreen </Text> */}
           <View style={styles.Header}>
              <Text style={styles.HeaderText}>Friends Settings</Text>
           </View>
           <ScrollView>
           <View style={styles.EditContainer}>
         
          
          
          
           
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
        flex:1
    },
    Header:{
      position:'absolute',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        backgroundColor:'#252525',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    },
    HeaderText:{
      fontFamily: 'Montserrat-ExtraLight',
      fontSize: RFValue(15),
      fontWeight:"600",
      color:'#fff'
    },
    EditContainer:{
      marginTop:heightPercentageToDP('12%'),
      zIndex:-50
    },
    TextHead:{
      margin: 5,
      fontFamily: 'Montserrat-Black',
      fontSize: RFValue(15)
    },
    TextHeadValue:{
      margin: 5,
      fontFamily: 'Montserrat-ExtraLight',
      fontSize: RFValue(15)
    },
    EditBio:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('20%'),
      backgroundColor:'#E8E8E8',
      borderRadius:5,
      marginLeft:5,
      paddingLeft:5,
      flexDirection:'column',
      textAlignVertical:'top'
    },
    EditLink1:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#E8E8E8',
      borderRadius:5,
      marginLeft:5,
      paddingLeft:5,
    },
    EditLink2:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#E8E8E8',
      borderRadius:5,
      marginLeft:5,
      paddingLeft:5,
    },
    footerBtnContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      margin:10
    },
    DoneBtn:{
      backgroundColor:'#88EC76',
      width:widthPercentageToDP('40%'),
      height:heightPercentageToDP('8%'),
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
    },
    CancelBtn:{
      backgroundColor:'#F56D33',
      width:widthPercentageToDP('40%'),
      height:heightPercentageToDP('8%'),
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
    },
    DoneTxt:{
      color:'#fff',
      fontFamily:'Montserrat-ExtraBold',
      fontSize:RFValue(13)
    },
    CancelTxt:{
      color:'#fff',
      fontFamily:'Montserrat-ExtraBold',
      fontSize:RFValue(13)
    },
    ModalTexth1:{
      alignItems:'center',
      textAlign:'center',
      color:'#A4A4A4',
      fontFamily:'Montserrat-Regular',
      fontWeight:'500',
      paddingTop:10
    },
    activeCom: {
      backgroundColor: '#4CEA36',
    },
    inactiveCom: {
      backgroundColor: '#FFFFFF',
    },
    activeText: {
      color: 'white',
    },
    inactiveText: {
      color: '#000',
    },
    button: {
      alignItems: 'center',
    },
    text1: {
      backgroundColor: '#CFDBD5',
      padding: 10,
      borderWidth: 1,
      color: 'black',
    }
})





