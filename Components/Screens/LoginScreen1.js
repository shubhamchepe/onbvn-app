import React, { Component } from 'react';
import { View, Text, 
StyleSheet, SafeAreaView, TextInput,
KeyboardAvoidingView, TouchableWithoutFeedback, 
Keyboard, ActivityIndicator, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import * as Font from 'expo-font';
const { width: WIDTH } = Dimensions.get('window');
import {widthPercentageToDP,heightPercentageToDP} from '../Screens/RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';


class LoginScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false,
        username:'',
        password:'',
        msg:'',
        label:null,
        loading:false
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraLight': require('../../assets/fonts/Montserrat-ExtraLight.ttf')

    });
    this.setState({fontLoaded:true});
    this.CheckIfUserIsLoggedIn();
  }

  SignInUser = async () => {
    
    this.setState({
     username: this.state.username,
     password:this.state.password,
   })

   if(this.state.username && this.state.password !== null){
    try{
      this.setState({
        loading:true
      })
      const response = await fetch('http://192.168.245.2:3000/Auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      });
      var promiseResponse = await response.json()
      console.log(promiseResponse.token,promiseResponse.id);
      UserTokenAndUserId = {Token:promiseResponse.token,UserID:promiseResponse.id}
      try {
        await AsyncStorage.setItem('LoginToken', JSON.stringify(UserTokenAndUserId));
        console.log('Token & User ID Stored In Async Storage');
        let InfoFromAsync = await AsyncStorage.getItem('LoginToken');
        console.log('Getting UserID & Token From Async...')
        InfoFromAsync = JSON.parse(InfoFromAsync)
        if(InfoFromAsync !== null){
          console.log(InfoFromAsync);
          this.setState({
            loading:false
          })
          this.props.navigation.navigate('Tabnav');
        }
        
      } catch (error) {
        // saving error
        console.log(`ERROR OCCURED ${error}`)
      }
      //this.props.navigation.navigate('Tabnav')
     } catch(error){
       console.log(`COULDN'T SIGN IN ${error}`)
     }
   } else {
     this.setState({
       msg:'Invalid Credentials',
       label:'red'
     });
   }
   
  
   
 }

 CheckIfUserIsLoggedIn = async () => {
      try{
         let tokenFromAsync = await AsyncStorage.getItem('LoginToken');
         tokenFromAsync = JSON.parse(tokenFromAsync);
         if(tokenFromAsync !== null){
           this.props.navigation.navigate('Tabnav')
         } else{
           return this.props.navigation.navigate('Loginscreen1')
         }
      } catch(error){
         console.log(`Error Occured In LoginScreen1 File At Line No.97: ${error}`)
      }
 }

  render() {
    return (
        <View style={styles.container}>
            {this.state.fontLoaded == true ?(
        <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
             <View style={styles.maincontainer}>

<View style={styles.logoContainer}>
  <Text style={styles.logoText}>onbvn</Text>
   {/* <Text style={styles.subLogo}>Our Indian Social Network</Text> */}
   <Text style={styles.subLogo}>Register With onbvn</Text>
 <Text style={styles.subLogo}>To See Photos & Videos Of Your Friends</Text>
</View>

<View style={styles.inputContainer}>
<Text style={{color:this.state.label}}>{this.state.msg}</Text>
  <TextInput 
      style={[styles.LoginUserInput,color='#ffffff']}
      placeholder={'username'}
      placeholderTextColor={'#6e6e6e'}
      underlineColorAndroid='transparent'
      clearButtonMode = 'always'
      returnKeyType='next'
      onChangeText={username => this.setState({username})}
      autoCorrect={false}
      onSubmitEditing={()=>this.refs.txtPassword.focus()}
                 />
  <TextInput 
     style={[styles.LoginUserInput1,color='#ffffff']}
     placeholder={'password'}
     placeholderTextColor={'#6e6e6e'}
     underlineColorAndroid='transparent'
     clearButtonMode = 'always'
     returnKeyType='go'
     onChangeText={password => this.setState({password})}
      ref={'txtPassword'}
                 />
   <TouchableOpacity style={{marginTop:heightPercentageToDP('4%')}}>
      <Text style={{color:'#6e6e6e',fontSize:15}}>Forgot Password ?</Text>
   </TouchableOpacity>
</View>

<View style={styles.infoContainer}>
  <TouchableOpacity style={styles.btns} onPress={() => this.SignInUser()}>
    {this.state.loading == false ? (
        <Text style={{fontFamily:'Montserrat-ExtraBold',
        fontWeight:"900",fontSize:RFValue(16),color:'#fff'}}>Sign In</Text>
      ) : (<ActivityIndicator size="small" color="#ffffff" />)}
    
  </TouchableOpacity>
</View>

<View style={styles.btnContainer}>
<TouchableOpacity style={styles.btns} onPress={() =>  this.props.navigation.navigate('Registerscreen3')}>
    <Text style={{fontFamily:'Montserrat-ExtraBold',
      fontWeight:"900",fontSize:RFValue(16),color:'#fff'}}>
      Sign Up
    </Text>
  </TouchableOpacity>
</View>
  
</View>
             </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </SafeAreaView>
       ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer:{
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    backgroundColor:'#252525',
    width:widthPercentageToDP('100%'),
    height:heightPercentageToDP('100%')  
   },
   container:{
       backgroundColor:'#252525',
       flex:1,
       flexDirection: 'column'
   },
   logoContainer:{
       flex:1,
       flexDirection:'column',
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('50%'),
       backgroundColor:'#252525',//change colour to debug
       alignItems:'center',
       justifyContent:'center',
       marginTop:heightPercentageToDP('1%'),
       paddingTop:heightPercentageToDP('2%')
   },
   logoText:{
       fontSize:RFValue(25),
       color:'#fff',
       fontFamily: 'Montserrat-ExtraBold',
       textAlign:'center',
       alignItems:'center'  
   },
   subLogo:{
       fontSize:RFValue(15),
        color:'#fff',
        fontFamily: 'Montserrat-ExtraLight', 
        textAlign:'center',
        alignItems:'center'
   },
   inputContainer:{
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('30%'),
       backgroundColor:'#252525',//change colour to debug
       alignItems:'center',
       marginTop:heightPercentageToDP('1%'),
       paddingTop: heightPercentageToDP('2%'),
       bottom:heightPercentageToDP('2%')
   },
   LoginUserInput:{
    height:heightPercentageToDP('7%'),
    width:widthPercentageToDP('90%'),
    borderRadius:8,
    backgroundColor:'#393939',
    fontSize:RFValue(16),
    paddingLeft:30,
    color:'#ffffff'
  },
  LoginUserInput1:{
    height:heightPercentageToDP('7%'),
    width:widthPercentageToDP('90%'),
    borderRadius:8,
    backgroundColor:'#393939',
    fontSize:RFValue(16),
    paddingLeft:30,
    marginTop:heightPercentageToDP('2%'),
    color:'#ffffff'
  },
   infoContainer:{
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('10%'),
       backgroundColor:'#252525',//change colour to debug
       alignItems:'center',
       marginTop:heightPercentageToDP('-2%'),
       paddingTop:heightPercentageToDP('2%')  
   },
   btnContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('10%'),
       backgroundColor:'#252525',//change colour to debug
       alignItems:'center',
       marginTop:heightPercentageToDP('1%'),
       bottom: heightPercentageToDP('1%')
   },
   btns:{
       backgroundColor:'#67e6dc',
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('6.5%'),
       alignItems:'center',
       justifyContent:'center',
       borderRadius:5
     },
     btnText:{
       fontFamily:'Montserrat-Regular',
       color:'#fff',
       fontWeight:'500',
       fontSize:RFValue(16)
     },
   
});

export default LoginScreen1;
