import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
ActivityIndicator,SafeAreaView, ScrollView,
KeyboardAvoidingView, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard, Modal,TouchableHighlight, Alert} from 'react-native';
import * as Font from 'expo-font';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
import styles from './RegisterScreen1.component.style';



class RegisterScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false,
        modalVisible: false,
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
    this.setState({fontLoaded:true})
  }
   
  componentWillUnmount(){
    this.setState({
      modalVisible:false
    })
    this.setModalVisible();
  }

  render() {
    return (
        <View style={styles.container}>
        {this.state.fontLoaded == true ?(
          <ScrollView>
            <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView style={styles.container} behavior="padding">
              <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
             <View style={styles.container}>
          <View style={styles.Logocontainer}>
               <Text style={styles.logoText}>onbvn</Text>
               {/* <Text style={styles.subLogo}>Our Indian Social Network</Text> */}
               <Text style={styles.subLogo}>Register With onbvn</Text>
               <Text style={styles.subLogo}>To See Photos & Videos Of Your Friends</Text>

          </View>
          
          <View style={styles.Inputcontainer}>
            <View style={{marginTop:20}}>
          <TextInput 
                  style={styles.LoginUserInput}
                  placeholder={'12-Digit Aadhar Card No(No Spaces)'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='next'
                  autoCorrect={false}
                  onSubmitEditing={()=>this.refs.txtPassword.focus()}
                 />
                 <TextInput 
                  style={styles.LoginUserInput1}
                  placeholder={'Fullname'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <TextInput 
                  style={styles.LoginUserInput1}
                  placeholder={'Username'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <TextInput 
                  style={styles.LoginUserInput1}
                  placeholder={'Mobile Number'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='go'
                  ref={'txtPassword'}
                 />
                  <TextInput 
                  style={styles.LoginUserInput1}
                  placeholder={'E-mail'}
                  placeholderTextColor={'#6e6e6e'}
                  underlineColorAndroid='transparent'
                  clearButtonMode = 'always'
                  returnKeyType='go'
                  ref={'txtPassword'}
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
                 </View>
                 <View style={styles.TNCcontainer}>
                    <Text style={styles.TNCfirstline}>By Signing Up, You Agree Our 
                      <Text style={styles.TNCfirstlinelw}> Terms,</Text></Text>
                      <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
                    <Text style={styles.TNCsecondline}>Data Policy & Cookies Policy</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.ButtonContainer}>
                     <TouchableOpacity style={styles.btns} onPress={() => this.props.navigation.navigate('Loginscreen1')}><Text style={styles.btnText}>Back</Text></TouchableOpacity>
                     <TouchableOpacity style={styles.btns} onPress={() => this.props.navigation.navigate('Registerscreen2')}><Text style={styles.btnText}>Next</Text></TouchableOpacity>
                 </View>
                 <TouchableWithoutFeedback onPress={Modal.dismiss}>
                 <View>
                 <View>
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
            <View style={{width: WIDTH-40,
            height: 450,
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
                 </View>
                 </TouchableWithoutFeedback>
          </View>
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
      </SafeAreaView>
      </ScrollView>
     
       ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

export default RegisterScreen1;
