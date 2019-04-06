import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, ProgressBarAndroid, YellowBox} from 'react-native';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import ForgotPass from '../Components/ForgotPass';
import GoToRegScreen from '../Components/GoToRegScreen';
import GoToLoginScreenBtn from '../Components/GoToLoginScreenBtn';
import axios from 'react-native-axios';
import RegisterScreen1 from './RegisterScreen1';
import RegisterScreen2 from './RegisterScreen2';
import welcomescreen2 from '../Images/welcomescreen2.png';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  withNavigation
} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')



class RegisterScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentScreen: 'RegisterScreen1',
      progress: 0.33,
      user_reg_data:{
      RS1_data: {
      full_name: '',
         user_name: '',
         mobile_number: '',
         e_mail: '',
         pass_word: '',
      },
      RS2_data: {
        coll_ege: '',
        sch_ool: '',
        wo_rk: '',
        ab_out: '',
        intr_easts: '',
        user_link: ''
      }
    }
    }
  }

  nextStep = async () => {
    this.setState({
      currentScreen: 'RegisterScreen2',
      progress: 1,
      user_reg_data:{
        RS1_data: {
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: '',
        },
        RS2_data: {
          coll_ege: '',
          sch_ool: '',
          wo_rk: '',
          ab_out: '',
          intr_easts: '',
          user_link: ''
        }
      }
        
    })
    if(this.state.currentScreen === "RegisterScreen2") {
      this.submitAndClear()
    }
  }

  prevStep = async () => {
    this.setState({
      currentScreen: 'RegisterScreen1',
      progress: 0.5,
      user: {
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: '',
           coll_ege: '',
           sch_ool: '',
           wo_rk: '',
           ab_out: '',
           intr_easts: '',
           user_link: ''
        }
    })
  }

  submitAndClear = async () => {
    this.setState({
      user: {
        full_name: '',
           user_name: '',
           mobile_number: '',
           e_mail: '',
           pass_word: '',
           coll_ege: '',
           sch_ool: '',
           wo_rk: '',
           ab_out: '',
           intr_easts: '',
           user_link: ''
        }
    })
   
    try {
       await AsyncStorage.setItem('UserInfoPart1',  JSON.stringify(this.state.user)); 
      const value = await AsyncStorage.getItem('UserInfoPart1'); 
        // We have data!!
        console.log(value);
    } catch (error) {
      // Error retrieving data
      console.warn(`Error occured: ${error}`)

    }
  
    /**const newUser = {
      full_name: this.state.full_name,
      user_name: this.state.user_name,
      mobile_number: this.state.mobile_number,
      e_mail: this.state.e_mail,
      pass_word: this.state.password
    }**/
  
  
     /** axios.post('http://192.168.43.77:3000/api/createusers', {
        full_name: this.state.full_name,
      user_name: this.state.user_name,
      mobile_number: this.state.mobile_number,
      e_mail: this.state.e_mail,
      pass_word: this.state.pass_word
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });**/
  }

  

  render() {

    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'RegisterScreen1' ? <RegisterScreen1/> : <RegisterScreen2/>;
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']);  // <- insert the warning text here you wish to hide.
    
        return (
             
              <ScrollView 
              horizontal={true}
              pagingEnabled={true}
              scrollEnabled={false}
              >

      <StatusBar
          backgroundColor="#000000"
          barStyle="light-content"
        />
              <View style={styles.Regscreenmainview}> 
              <View style={{bottom: 10}}>
              <Text style={styles.RSlogo}>onbvn</Text>
              <Text style={styles.RSsublogo}>Register With onbvn</Text>
              <Text style={styles.RSsublogo}>To See Photos And Videos Of Your Friends</Text>
              <View>
            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              color="#ffffff"
              progress={this.state.progress}
            />
          </View>
              </View>
              <View style={{bottom: 10}}>
                   
                  
                  {mainScreen}
                  

              
                    <View style={{top: 10}}>
                    <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
                    <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
                    </View>
                    <View style={{top: 30}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-end'}}>
                    <TouchableOpacity title="Next" onPress={() => this.nextStep()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-260, height: 45, justifyContent: 'center', borderRadius: 5,marginRight:32}} >
                    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Next</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{top: -15}}>
                    {/*<GetStarted />*/}
                    <View style={{alignItems: 'flex-start'}}>
                    <TouchableOpacity title="Back" onPress={() => this.prevStep()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-260, height: 45, justifyContent: 'center', borderRadius: 5,marginLeft:35}} >
                    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Back</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                  </View>
              </View>
              <View style={styles.mainview}>
                  <Image source={welcomescreen2}  style={styles.ws}/>
                  <GoToLoginScreenBtn style={{}}/>
              </View>

              </ScrollView>
             
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
              ws: {
                width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
              }
      })
    
      export default RegisterScreen;