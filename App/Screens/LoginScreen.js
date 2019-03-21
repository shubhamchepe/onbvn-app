import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform, ScrollView, View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import ForgotPass from '../Components/ForgotPass';
import GoToRegScreen from '../Components/GoToRegScreen';
import axios from 'react-native-axios';
const { width: WIDTH } = Dimensions.get('window')


class LoginScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
           user_name: '',
           pass_word: '',
           showToast: false
      }
    }
    
  
     checkLogin() {
    
         const { user_name, pass_word } = this.state;
      
       /** console.warn('Right!');
        console.warn(`User Name : ${this.state.user_name}`);
       console.warn(`Password : ${this.state.pass_word}`); **/
  
       if(this.state.user_name == '' && this.state.pass_word == ''){
        Toast.show({
          text: "Please Input Something",
           buttonText: "",
            type: "danger"
         });
       } else{
       let self = this;
       axios.get('http://192.168.43.77:3000/api/findusername/'+this.state.user_name)
       .then( function (response) {
         const {user:{user_name,pass_word}} = response.data;
         //console.warn(user_name);
              //console.warn(user_name, self.state.user_name);
              //console.warn(pass_word, self.state.pass_word);
               if(self.state.user_name == user_name && self.state.pass_word == pass_word){
              Toast.show({
                 text: "Awesome!",
                  buttonText: "",
                   type: "success"
                });
                  setTimeout(() => (self.props.navigation.navigate('Homescreen1')),3000)
               }
               else {
                 if(self.state.user_name == user_name && self.state.pass_word == pass_word){
                  Toast.show({
                    text: "Sorry ! There is no such user",
                    buttonText: "",
                    type: "danger"
                   })
                 }
                
               } 
               self.setState({
                user_name: '',
               pass_word: ''
            }) 
      })
      .catch(function (error) {
  
        Toast.show({
          text: "Sorry ! There is no such user",
          buttonText: "Okay",
          type: "danger"
         })
      })
      
      }
  
     }
  
    render() {
      return (
        <View style={styles.mainview}> 
        <View style={{bottom: 100}}>
        <Text style={styles.LSlogo}>onbvn</Text>
        <Text style={styles.LSsublogo}>Our Indian Social Network</Text>
        </View>
        <View style={{bottom: 55}}>
             <TextInput 
             style={styles.LSInp1}
             placeholder={'Username'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             onChangeText={user_name => this.setState({user_name})}
             value={this.state.user_name}
             clearButtonMode = 'always'
             />
             <TextInput 
             style={styles.LSInp2}
             placeholder={'Password'}
             placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
             underlineColorAndroid='transparent'
             secureTextEntry
             onChangeText={pass_word => this.setState({pass_word})}
             value={this.state.pass_word}
             clearButtonMode = 'always'
             />
             {/** <LoginButton /> **/ }
             <View style={{alignItems: 'center'}}><TouchableOpacity title="Back" onPress={() => { /**this.props.navigation.navigate('Homescreen1')**/this.checkLogin() }} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-200, height: 45, justifyContent: 'center', borderRadius: 5}} >
      <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Log In</Text>
      </TouchableOpacity></View>
              <ForgotPass style={styles.forgotpassbtn} />
             </View>
            <View>
              <Text style={{fontSize: 20, color: '#ffffff'}}> ---------- OR ---------- </Text>
            </View>
            <View style={{top: 30}}>
               <GoToRegScreen />
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
          }
  })

  export default LoginScreen;