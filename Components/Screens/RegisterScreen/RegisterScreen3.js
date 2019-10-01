//Register Screen With TextInput Boxes

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
ActivityIndicator,SafeAreaView, ScrollView,
KeyboardAvoidingView, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard, Modal,TouchableHighlight, Alert,Image,AsyncStorage} from 'react-native';
import {Toast,Root,Content,Item,Input} from 'native-base'
import * as Font from 'expo-font';
import {Asset} from 'expo';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
import styles from './RegisterScreen3.component.style';
import {widthPercentageToDP,heightPercentageToDP} from './ResponsiveFormula';





class RegisterScreen3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false,
        modalVisible: false,
        label:null,
        bold:'normal',
        msg:'',
        aadhar:'',
        firstname:'',
        lastname:'',
        username:'',
        mobile_number:'',
        e_mail:'',
        password:''
    };
  }
   
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
      'Montserrat-Thin': require('../../../assets/fonts/Montserrat-Thin.ttf'),
      'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
      'typerighter': require('../../../assets/fonts/rm_typerighter.ttf'),

    });
    this.setState({fontLoaded:true});
  }
   
  componentWillUnmount(){
    this.setState({
      modalVisible:false
    })
    this.setModalVisible();
  }

  validateAadhaar = async (input) =>
   {
     numbers=/^[0-9]+$/;
     letters = /^[a-zA-Z]*$/;
     if(input == this.state.aadhar){
       //the code line below returns green flag if correctly entered number's one last value is removed and replaced by alphabet.
       //this is a problem
        if(numbers.test(input) && input.length == 11 && input.search(letters) === -1){
         this.setState({
            msg:'Good Job! Go Ahead!',
            label:'green'
          });
          return true;
        } else {
           this.setState({
            msg:'Enter Valid Aadhar Number',
            label:'red'
          });
          return false;
        }
      }
   }

   validateFirstname(input)
   {
     alpha= /^[a-zA-Z.'-]+(?: +[a-zA-Z.'-]+)+$/;
     if(input == this.state.firstname){
        if(alpha.test(input)){
          this.setState({
            //how will i take only first name after the space here.
            msg: `Nice Name ${this.state.firstname}`,
            label:'green'
          });
          return true;
        } else{
          this.setState({
            msg:'Please Enter Your First Name',
            label:'red'
          });
          return false;
        }
      }
   }

   validateLastname(input)
   {
     alpha= /^[a-zA-Z.'-]+(?: +[a-zA-Z.'-]+)+$/;
     if(input == this.state.lastname){
        if(alpha.test(input)){
          this.setState({
            //how will i take only first name after the space here.
            msg: `Nice Name ${this.state.lastname}`,
            label:'green'
          });
          return true;
        } else{
          this.setState({
            msg:'Please Enter Your Last Name',
            label:'red'
          });
          return false;
        }
      }
   }

   validateUsername(input)
   {
     alpha= /^[a-z0-9]*$/;
     if(input == this.state.username){
        if(alpha.test(input)){
          this.setState({
            msg: `Cool!`,
            label:'green'
          });
          return true;
        } else{
          this.setState({
            msg:'Username => alpha-numeric-lowercase with no-space',
            label:'red'
          });
          return false;
        }
      }
   }

   validateMob(input)
   //this function also has glitch.
   {
     alpha= /^[0-9]+$/;
     if(input == this.state.mobile_number){
        if(alpha.test(input) && input.length == 9 && input.length <= 9){
          this.setState({
            msg: 'Thanks...',
            label:'green'
          });
          return true;
        } else{
          this.setState({
            msg:'Enter Your Correct Mobile Number',
            label:'red'
          });
          return false;
        }
      }
   }

   validateEmail(input)
   //this function also has glitch.
   {
     alpha= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(input == this.state.e_mail){
        if(alpha.test(input)){
          this.setState({
            msg: 'Got It!',
            label:'green'
          });
          return true;
        } else{
          this.setState({
            msg:'Invalid Email',
            label:'red'
          });
          return false;
        }
      }
   }
  

  
  submitForm1 = async () => {
    
     this.setState({
      aadhar: this.state.aadhar,
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      username:this.state.username,
      mobile_number:this.state.mobile_number,
      e_mail:this.state.e_mail,
      password:this.state.password
    })
   
      console.log('Form Submitted');
      try {
        await AsyncStorage.setItem('Reg1Data', JSON.stringify(this.state));
        this.props.navigation.navigate('Registerscreen2');
      } catch (error) {
        // saving error
        console.log(`ERROR OCCURED ${error}`)
      }
    
  }

  

  render() {
    return (
        <View style={styles.container}>
        {this.state.fontLoaded == true ?(
          <Root>
          <ScrollView style={{flex:1}} contentContainerStyle={styles.contentContainer}>
          <SafeAreaView style={styles.maincontainer}>
            <KeyboardAvoidingView style={styles.maincontainer} behavior="padding">
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <View style={styles.maincontainer}>

              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>onbvn</Text>
                 {/* <Text style={styles.subLogo}>Our Indian Social Network</Text> */}
                 <Text style={styles.subLogo}>Register With onbvn</Text>
               <Text style={styles.subLogo}>To See Photos & Videos Of Your Friends</Text>
              </View>
              
              <View style={styles.inputContainer}>
              <Text style={{color:this.state.label,fontWeight:this.state.bold}}>{this.state.msg}</Text>
              <View style={{flexDirection:'row'}}>
                 <TextInput 
                  style={[styles.FirstName,color='#ffffff']}
                  placeholder={'Firstname'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  keyboardType='default'
                  value={this.state.firstname}
                  onChangeText={firstname => {this.setState({firstname}); this.validateFirstname(this.state.firstname)}}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                 <TextInput 
                  style={[styles.LastName,color='#ffffff']}
                  placeholder={'Lastname'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  keyboardType='default'
                  value={this.state.lastname}
                  onChangeText={lastname => {this.setState({lastname}); this.validateLastname(this.state.lastname)}}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                 </View>
                 <TextInput 
                  style={[styles.LoginUserInput1,color='#ffffff']}
                  placeholder={'Username'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  keyboardType='default'
                  value={this.state.username}
                  onChangeText={username => {this.setState({username}); this.validateUsername(this.state.username)}}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <TextInput 
                  style={[styles.LoginUserInput1,color='#ffffff']}
                  placeholder={'Mobile Number'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  keyboardType='numeric'
                  value={this.state.mobile_number}
                  onChangeText={mobile_number => {this.setState({mobile_number}); this.validateMob(this.state.mobile_number)}}
                  maxLength={10}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <TextInput 
                  style={[styles.LoginUserInput1,color='#ffffff']}
                  placeholder={'E-mail'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  value={this.state.e_mail}
                  onChangeText={e_mail => {this.setState({e_mail}); this.validateEmail(this.state.e_mail)}}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
               <TextInput 
                  style={[styles.LoginUserInput1,color='#ffffff']}
                  placeholder={'12-Digit Aadhar Card No(No Spaces)'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  keyboardType='numeric'
                  value={this.state.aadhar}
                  onChangeText={aadhar => {this.setState({aadhar}); this.validateAadhaar(this.state.aadhar)}}
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={()=>this.refs.txtPassword.focus()}
                 /> 
                 <TextInput 
                  style={[styles.LoginUserInput1,color='#ffffff']}
                  placeholder={'password'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  secureTextEntry={true}
                  value={this.state.password}
                  onChangeText={password => this.setState({password})}
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  
              </View>

              <View style={styles.infoContainer}>
                  <Text style={styles.TNCfirstline}>By Signing Up, You Agree Our 
                  <Text style={styles.TNCfirstlinelw}> Terms,</Text></Text>
                  <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                  <Text style={styles.TNCsecondline}>Data Policy & Cookies Policy</Text>
                  </TouchableOpacity>
              </View>

              <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btns} onPress={() => this.props.navigation.navigate('Loginscreen1')}><Text style={styles.btnText}>Back</Text></TouchableOpacity>
                     <TouchableOpacity style={styles.btns} onPress={() => this.submitForm1()}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
              </View>

              <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!this.state.modalVisible);
          }}>
          <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <View style={{width: widthPercentageToDP('90%'),
            height: heightPercentageToDP('70%'),
            backgroundColor:'#393939',borderRadius:8}}>
              <Text style={styles.ModalTexth1}>Terms-Conditions & Policies</Text>
              <ScrollView>
              <Text style={styles.ModalTextp}>
              Vestibulum mattis risus non ligula interdum auctor. Morbi mollis interdum nunc, quis mollis urna faucibus et. 
              Aliquam consectetur orci quis est tincidunt aliquam. Integer tincidunt fringilla ipsum,
               quis placerat nisi. Suspendisse potenti. In bibendum elit in faucibus aliquam. Maecenas in malesuada nisl.
                Pellentesque ut felis odio. Nulla ullamcorper urna ut mauris consequat, non convallis ex gravida. Morbi sed erat metus. 
                Suspendisse potenti. Fusce id pellentesque mi. Cras blandit nec purus eget faucibus. Aenean id velit a justo scelerisque porttitor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et imperdiet nisl. Fusce bibendum ac lacus eget vestibulum. 
                Ut sagittis ligula et risus dapibus, ut efficitur dolor maximus. Morbi ullamcorper risus est, eget pretium dolor rhoncus elementum. 
                Suspendisse ut interdum ex, ac faucibus arcu.Vestibulum mattis risus non ligula interdum auctor. Morbi mollis interdum nunc, 
                quis mollis urna faucibus et. Aliquam consectetur orci quis est tincidunt aliquam. Integer tincidunt fringilla ipsum, 
                Vestibulum mattis risus non ligula interdum auctor. Morbi mollis interdum nunc, quis mollis urna faucibus et. Aliquam
                consectetur orci quis est tincidunt aliquam. Integer tincidunt fringilla ipsum, quis placerat nisi. Suspendisse potenti.
                 In bibendum elit in faucibus aliquam. Maecenas in malesuada nisl. Pellentesque ut felis odio. Nulla ullamcorper urna ut 
                 mauris consequat, non convallis ex gravida.
              </Text>
              <View style={styles.ModalDismissBtnPos}>
              <TouchableHighlight
              style={styles.hideModal}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{color:'#fff',fontFamily:'Montserrat-Regular',fontWeight:'700'}}>Got It</Text>
              </TouchableHighlight>
              </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
                
          </View>
          </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          </SafeAreaView>
          </ScrollView>
          </Root>
       ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

showValues = () => {
  console.warn(this.state.aadhar)
}

export default RegisterScreen3;
