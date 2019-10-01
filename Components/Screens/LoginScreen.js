import React, { Component } from 'react';
import { View, Text, 
StyleSheet, SafeAreaView, TextInput,
KeyboardAvoidingView, TouchableWithoutFeedback, 
Keyboard, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import * as Font from 'expo-font';
const { width: WIDTH } = Dimensions.get('window');

class LoginScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false
    };
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Montserrat-Black': require('../../assets/fonts/Montserrat-Black.ttf'),
      'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
      'Montserrat-ExtraLight': require('../../assets/fonts/Montserrat-ExtraLight.ttf')

    });
    this.setState({fontLoaded:true})
  }

  render() {
    return (
        <View style={styles.container}>
            {this.state.fontLoaded == true ?(
        <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView behavior="padding" style={styles.container}>
             <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
         <View style={styles.container}>
          <View style={styles.logoContainer}>
              <Text style={styles.logoText}>onbvn</Text>
              <Text style={styles.subLogo}>Our Indian Social Newwork</Text>
          </View>
          <View style={styles.infoContainer}>
                 <TextInput 
                  style={styles.LoginUserInput}
                  placeholder={'username'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={()=>this.refs.txtPassword.focus()}
                 />
                 <TextInput 
                  style={styles.LoginUserInput1}
                  placeholder={'password'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <View style={styles.forgotPassword}>
                      <TouchableOpacity>
              <Text style={{color:'#6e6e6e',fontSize:15}}>Forgot Password ?</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.registerLink}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Registerscreen1')}>
                <Text style={{color:'#6e6e6e',fontSize:15,textAlign:'center'}}>
                      New To onbvn ? Click Here To Register
                      Remember ! It Will Not Be Easy
                </Text>
            </TouchableOpacity>
          </View>
          </View>
         
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={{fontFamily:'Montserrat-ExtraBold',
                  fontWeight:"900",fontSize:18,color:'#fff'}}>
                   Sign In
                  </Text>
            </TouchableOpacity>
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
    container:{
        backgroundColor:'#252525',
        flex:1,
        flexDirection: 'column',
    },
    logoContainer:{
       alignItems:'center',
       justifyContent: 'center',
       flex:1,
       marginBottom: 200,
    },
    logoText:{
      fontSize:28,
      color:'#fff',
      fontFamily: 'Montserrat-ExtraBold', 
    },
    subLogo:{
       fontSize:15,
       color:'#fff',
       fontFamily: 'Montserrat-ExtraLight', 

    },
    infoContainer:{
        position:'absolute',
        backgroundColor:'#252525',
        height:240,
        left:0,
        right:0,
        bottom:60,
        padding: 20,
    },
    LoginUserInput:{
        height:45,
        borderRadius:8,
        backgroundColor:'#393939',
        fontSize:20,
        paddingLeft:30,
      },
      LoginUserInput1:{
        height:45,
        borderRadius:8,
        backgroundColor:'#393939',
        fontSize:20,
        paddingLeft:30,
        marginTop:20,
      },
      buttonContainer:{
        backgroundColor:'#67e6dc',
        paddingVertical: 15,
        marginLeft:25,
        marginRight: 25,
        marginBottom: 10,
        borderRadius:8,
        alignItems:'center'
      },
      forgotPassword:{
          alignItems:'center',
          marginTop:10
      },
      registerLink:{
        flex:1,
        marginTop:10,
        marginLeft:15,
        marginRight:15
      }
});

export default LoginScreen1;
