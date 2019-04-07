import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, YellowBox} from 'react-native';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import ForgotPass from '../Components/ForgotPass';
import GoToRegScreen from '../Components/GoToRegScreen';
import GoToLoginScreenBtn from '../Components/GoToLoginScreenBtn';
import axios from 'react-native-axios';
import welcomescreen2 from '../Images/welcomescreen2.png';
import AsyncStorage from '@react-native-community/async-storage';
import { withNavigation } from 'react-navigation';
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')



class RegisterScreen1 extends Component {
  

  constructor(props){
    super(props);
    this.state = {
      aadhaar_number: '',
         full_name: '',
         user_name: '',
         mobile_number: '',
         e_mail: '',
         pass_word: ''
    }
  }

   validateAadhaar(input)
   {
     numbers=/^[0-9]+$/;
     if(input == this.state.aadhaar_number){
        if(numbers.test(this.state.aadhaar_number)){
          Toast.show({
            text: "Good! Go Ahead",
             buttonText: "",
              type: "success"
           });
        } else {
          Toast.show({
            text: "Enter 12-Digit Aadhaar!",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.aadhaar_number.length === ''){
          Toast.show({
            text: "Please Enter Aadhaar Number",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
        if(this.state.aadhaar_number.length == 11){
          Toast.show({
            text: "Good Job!",
             buttonText: "",
              type: "success"
           });
        }
       
      }
   }

   validateFullname(input)
   {
     alpha=/^[a-zA-Z]+$/;
     if(input == this.state.full_name){
        if(alpha.test(input)){
          Toast.show({
            text: "Great & Make Sure Your Name Is Same As On Aadhaar Card! ",
             buttonText: "",
              type: "success"
           });
        } else{
          Toast.show({
            text: "Your Name Should Be Plain Text!",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.full_name === ''){
          Toast.show({
            text: "Please Enter Your Full Name As Per Your Aadhaar Card",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
      }
   }

   validateUsername(input)
   {
     alpha=/^[a-z]+$/;
     if(input == this.state.user_name){
        if(alpha.test(input)){
          Toast.show({
            text: "Great",
             buttonText: "",
              type: "success"
           });
        } else{
          Toast.show({
            text: "Username Should Be All Lowercase Letters",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.user_name === ''){
          Toast.show({
            text: "Please Enter Your Username",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
      }
   }

   validateMobno(input)
   {
     numbers=/^[0-9]+$/;
     if(input == this.state.mobile_number){
        if(numbers.test(this.state.mobile_number)){
          Toast.show({
            text: "Ohh! Your Number Has A Lucky Start!",
             buttonText: "",
              type: "success"
           });
        } else {
          Toast.show({
            text: "Enter 10-Digit Mobile Number!",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.mobile_number === ''){
          Toast.show({
            text: "Please Enter Your Mobile Number",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
        if(this.state.mobile_number.length == 9){
          Toast.show({
            text: "Amazing!!",
             buttonText: "",
              type: "success"
           });
        }
       
      }
   }

   validateEmail(input)
   {
     email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
     if(input == this.state.e_mail){
        if(email.test(this.state.e_mail)){
          Toast.show({
            text: "Be Carefull ! , We will be verifying it's you!",
             buttonText: "",
              type: "success"
           });
        } else {
          Toast.show({
            text: "Email Not Valid",
             buttonText: "",
              type: "danger"
           });
        }
        if(this.state.e_mail === ''){
          Toast.show({
            text: "Please Enter Your Email",
             buttonText: "",
              type: "success"
           });
        } else{
          null
        }
        if(this.state.e_mail.length == 9){
          Toast.show({
            text: "Amazing!!",
             buttonText: "",
              type: "success"
           });
        }
       
      }
   }

  submitAndClear = async () => {
    this.setState({
      aadhaar_number: this.state.aadhaar_number,
      full_name: this.state.full_name,
      user_name: this.state.user_name,
      mobile_number: this.state.mobile_number,
      e_mail: this.state.e_mail,
      pass_word: this.state.pass_word
    })
  
    /**const newUser = {
      full_name: this.state.full_name,
      user_name: this.state.user_name,
      mobile_number: this.state.mobile_number,
      e_mail: this.state.e_mail,
      pass_word: this.state.password
    }**/
  
     this.props.navigation.navigate('Registerscreenstep2'); //Homescreen1
    console.log('Form Submitted !');
      console.log(`Aadhaar Number : ${this.state.aadhaar_number}`);
      console.log(`FullName : ${this.state.full_name}`);
      console.log(`Username : ${this.state.user_name}`);
      console.log(`Mobile Number : ${this.state.mobile_number}`);
      console.log(`Email : ${this.state.e_mail}`);
      console.log(`Password : ${this.state.pass_word}`);
  
      
      try {
        await AsyncStorage.setItem('UserInfoPart1',  JSON.stringify(this.state)); 
       const value = await AsyncStorage.getItem('UserInfoPart1'); 
         // We have data!!
         console.log(value);
     } catch (error) {
       // Error retrieving data
       console.warn(`Error occured: ${error}`)
 
     }
  }
  
    render() {
      YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);
      return (
        <View style={styles.Regscreenmainview}> 
        <View style={{bottom: 10}}>
        <Text style={styles.RSlogo}>onbvn</Text>
        <Text style={styles.RSsublogo}>Register With onbvn</Text>
        <Text style={styles.RSsublogo}>To See Photos And Videos Of Your Friends</Text>
        </View>
        <View style={{bottom: 10}}>
             <TextInput 
             style={styles.LSInp1}
             placeholder={'12-Digit Aadhaar Card Number(no space)'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             keyboardType='phone-pad'
             underlineColorAndroid='transparent'
             onChangeText={aadhaar_number => {this.setState({aadhaar_number}); this.validateAadhaar(this.state.aadhaar_number);}}
             value={this.state.aadhaar_number}
             clearButtonMode = 'always'
             maxLength = {12}
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Fullname'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={full_name => {this.setState({full_name}); this.validateFullname(this.state.full_name);}}
             value={this.state.full_name}
             clearButtonMode = 'always'
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Username'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={user_name => {this.setState({user_name}); this.validateUsername(this.state.user_name);}}
             value={this.state.user_name}
             clearButtonMode = 'always'
  
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Mobile Number'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             keyboardType='phone-pad'
             underlineColorAndroid='transparent'
             onChangeText={mobile_number => {this.setState({mobile_number}); this.validateMobno(this.state.mobile_number);}}
             value={this.state.mobile_number}
             clearButtonMode = 'always'
             maxLength = {10}
  
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'E-mail'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             keyboardType='email-address'
             underlineColorAndroid='transparent'
             onChangeText={e_mail => {this.setState({e_mail}); this.validateEmail(this.state.e_mail);}}
             value={this.state.e_mail}
             clearButtonMode = 'always'
  
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Password'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             secureTextEntry
             underlineColorAndroid='transparent'
             onChangeText={pass_word => this.setState({pass_word})}
             value={this.state.pass_word}
             clearButtonMode = 'always'
  
             />
              <View style={{top: 10}}>
               <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
               <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
               </View>
               <View style={{top: 30}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity title="Next" onPress={() => this.submitAndClear()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-260, height: 45, justifyContent: 'center', borderRadius: 5,marginRight:32}} >
                    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Next</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{top: -15}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-start'}}>
                    <TouchableOpacity title="Back" onPress={() => this.props.navigation.goBack()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-260, height: 45, justifyContent: 'center', borderRadius: 5,marginLeft:35}} >
                    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Back</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
             </View>
         </View>
      );
    }
  }

  const styles = StyleSheet.create({
      mainview: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000'
          },
          LSlogo: {
              fontFamily: 'montserrat-extrabold',
              fontSize: 35,
              textAlign: 'center',
              color: '#ffffff',
            },
            LSsublogo: {
              fontFamily: 'montserratthin',
              fontSize: 16,
              textAlign: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            },
            LSInp1: {
              width: WIDTH - 55,
              height: 45,
              borderRadius: 9,
              fontSize: 16,
              paddingLeft: 35,
              backgroundColor: 'rgba(245, 245, 245, 0.15)',
              color: 'rgba(255, 255, 255, 0.7)',
              marginHorizontal: 25,
              margin: 15,
              justifyContent: 'center'
            },
            LSInp2: {
              width: WIDTH - 55,
              height: 45,
              borderRadius: 9,
              fontSize: 16,
              paddingLeft: 45,
              backgroundColor: 'rgba(245, 245, 245, 0.15)',
              color: 'rgba(255, 255, 255, 0.7)',
              marginHorizontal: 25,
              justifyContent: 'space-between',
              marginBottom: 15
            },
            Regscreenmainview: {
              flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000',
            },
            RSlogo: {
              fontFamily: 'montserrat-extrabold',
              fontSize: 35,
              textAlign: 'center',
              color: '#ffffff',
            },
            RSsublogo: {
              fontFamily: 'montserratregular',
              fontSize: 15,
              textAlign: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }
    })
  
    export default RegisterScreen1;