import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, YellowBox} from 'react-native';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import ForgotPass from '../Components/ForgotPass';
import GoToRegScreen from '../Components/GoToRegScreen';
import GoToLoginScreenBtn from '../Components/GoToLoginScreenBtn';
import axios from 'react-native-axios';
import welcomescreen2 from '../Images/welcomescreen2.png';
import aadhar_icon from '../Images/aadhaar-icon.png';
import aadhar_icon2 from '../Images/aadhaar-icon2.png';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')



class RegisterScreen2 extends Component {
  
componentDidMount = () => {
  
  AsyncStorage.getItem('UserInfoPart1')
  .then((value) => {
    const data = JSON.parse(value);
    console.log('name is ', data.full_name);
  });
      
    }



  constructor(props){
    super(props);
    this.state = {
         wo_rk: '',
         sch_ool: '',
         coll_ege: '',
         girl_friend: '',
         girl_friend2: ''
    }
  }
  submitAndClear = async () => {
    this.setState({
      wo_rk: this.state.wo_rk,
      sch_ool: this.state.sch_ool,
      coll_ege: this.state.coll_ege,
      girl_friend: this.state.girl_friend,
      girl_friend2: this.state.girl_friend2
    })
  
    /**const newUser = {
      full_name: this.state.full_name,
      user_name: this.state.user_name,
      mobile_number: this.state.mobile_number,
      e_mail: this.state.e_mail,
      pass_word: this.state.password
    }**/
  
    this.props.navigation.navigate('Loginscreen'); //Homescreen1
    console.log('Form Submitted !');
      console.log(`Work : ${this.state.wo_rk}`);
      console.log(`School : ${this.state.sch_ool}`);
      console.log(`College : ${this.state.coll_ege}`);
      console.log(`Girlfriend : ${this.state.girl_friend}`);
      console.log(`Girlfriend2 : ${this.state.girl_friend2}`);
  
      
      try {
        await AsyncStorage.mergeItem('UserInfoPart1',  JSON.stringify(this.state)); 
       const value = await AsyncStorage.getItem('UserInfoPart1'); 
         // We have data!!
         console.log(value);
     } catch (error) {
       // Error retrieving data
       console.warn(`Error occured: ${error}`)
 
     }
  }

  handleChoosePhoto = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, response => {
    console.log("response", response);
    noData: true
    });
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
             {/* <TextInput 
             style={styles.LSInp1}
             placeholder={'Work'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={wo_rk => this.setState({wo_rk})}
             value={this.state.wo_rk}
             clearButtonMode = 'always'
             /> */}
             <View style={{top: 10}}>
             <TouchableOpacity onPress={this.handleChoosePhoto}>
               <Image
                 style={styles.imgupld1}
                 source={aadhar_icon}
                />
    </TouchableOpacity>
    <Text style={styles.aadhar_text}>Click to upload aadhaar card (Front)</Text>
    </View>
     
     <View style={{top: 20}}>
    <TouchableOpacity onPress={this.handleChoosePhoto}>
               <Image
                 style={styles.imgupld2}
                 source={aadhar_icon2}
                />
    </TouchableOpacity>
    <Text style={styles.aadhar_text}>Click to upload aadhaar card (Back)</Text>
    </View>
             {/* <TextInput 
             style={styles.LSInp2}
             placeholder={'School'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={sch_ool => this.setState({sch_ool})}
             value={this.state.sch_ool}
             clearButtonMode = 'always'
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'College'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             keyboardType='phone-pad'
             underlineColorAndroid='transparent'
             onChangeText={coll_ege => this.setState({coll_ege})}
             value={this.state.coll_ege}
             clearButtonMode = 'always'
  
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Girlfriend'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={girl_friend => this.setState({girl_friend})}
             value={this.state.girl_friend}
             clearButtonMode = 'always'
  
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Girlfriend2'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={girl_friend2 => this.setState({girl_friend2})}
             value={this.state.girl_friend2}
             clearButtonMode = 'always'
  
             /> */}
              <View style={{top: 50}}>
               <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
               <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
               </View>
               <View style={{top: 60}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity title="Next" onPress={() => this.submitAndClear()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-280, height: 45, justifyContent: 'center', borderRadius: 5}} >
                    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Get Started</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{top: 15}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-start'}}>
                    <TouchableOpacity title="Back" onPress={() => this.props.navigation.goBack()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-280, height: 45, justifyContent: 'center', borderRadius: 5}} >
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
              paddingLeft: 45,
              backgroundColor: 'rgba(245, 245, 245, 0.15)',
              color: 'rgba(255, 255, 255, 0.7)',
              marginHorizontal: 25,
              margin: 15
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
            },
            imgupld1: {
              width: WIDTH - 200,
              height: 120,
              borderRadius: 9,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 25,
              margin: 15,
            },
            imgupld2: {
              width: WIDTH - 200,
              height: 120,
              borderRadius: 9,
              alignItems: 'center',
              marginHorizontal: 25,
              justifyContent: 'space-between',
              marginBottom: 15
            },
            aadhar_text:{
              fontFamily: 'montserratregular',
              fontSize: 13,
              fontWeight: '700',
              textAlign: 'center',
              justifyContent: 'center',
              color: '#ffffff'
            }

    })
  
    export default RegisterScreen2;