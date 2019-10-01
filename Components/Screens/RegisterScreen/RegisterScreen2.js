//Register Screen With Aadhar Input Boxes

import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,
ActivityIndicator,SafeAreaView, ScrollView,
KeyboardAvoidingView, TextInput, TouchableOpacity, 
TouchableWithoutFeedback, Keyboard, Modal,TouchableHighlight, Alert,Image,AsyncStorage} from 'react-native';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import {Asset} from 'expo-asset';
import * as Permissions from 'expo-permissions';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
import styles from './RegisterScreen2.component.style';
import {widthPercentageToDP,heightPercentageToDP} from './ResponsiveFormula';
const AadharFrontDummy = Asset.fromModule(require('../../../assets/images/aadhaar-icon.png')).uri;
const AadharBackDummy = Asset.fromModule(require('../../../assets/images/aadhaar-icon2.png')).uri;




class RegisterScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontLoaded:false,
        modalVisible: false,
        image:AadharFrontDummy,
        image1:AadharBackDummy,
        msg:'',
        label:null
    };
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  getPermissionAsync = async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [widthPercentageToDP('90%'), heightPercentageToDP('30%')],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  _pickImage1 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [widthPercentageToDP('90%'), heightPercentageToDP('30%')],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image1: result.uri });
    }
  };

  showFinalData = async () => {
    this.setState({
      image:this.state.image,
      image1:this.state.image1
    })
    console.log('HERE IS THE FINAL DATA');
    console.log('Form Submitted');
    try {
      //await AsyncStorage.setItem('Reg1Data', JSON.stringify(this.state))
      await AsyncStorage.mergeItem('Reg1Data', JSON.stringify(this.state))
      let value = await AsyncStorage.getItem('Reg1Data');
       if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value).image);
      value = JSON.parse(value)
      console.log(value);
      fetch('http://192.168.245.2:3000/createUser', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstname: value.firstname,
    lastname: value.lastname,
    username: value.username,
    mobileNumber: value.mobile_number,
    email: value.e_mail,
    password: value.password,
    aadharUID: value.aadhar,
    aadharFrontImage: value.image.uri,
    aadharBackImage: value.image1.uri
  })
}).then(async Response => {
  await this.props.navigation.navigate('Loginscreen1')
}).catch(error => {
  console.log(error);
});

    }
    } catch (error) {
      // saving error
      console.log(`ERROR OCCURED ${error}`)
      this.setState({
        msg:'Something Went Wrong',
        label:'red'
      })
    }
     
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
    this.getPermissionAsync();
  }
   
  componentWillUnmount(){
    this.setState({
      modalVisible:false
    })
    this.setModalVisible();
  }

  render() {
    let { image, image1 } = this.state;
    return (
        <View style={styles.container}>
        {this.state.fontLoaded == true ?(
          <ScrollView>
            <SafeAreaView style={styles.maincontainer}>
            <View style={styles.maincontainer}>

<View style={styles.logoContainer}>
  <Text style={styles.logoText}>onbvn</Text>
   {/* <Text style={styles.subLogo}>Our Indian Social Network</Text> */}
   <Text style={styles.subLogo}>Register With onbvn</Text>
 <Text style={styles.subLogo}>To See Photos & Videos Of Your Friends</Text>
</View>

<View style={styles.inputContainer}>
<Text style={{color:this.state.label}}>{this.state.msg}</Text>
<View style={styles.AadharContainer1}>
    <TouchableOpacity style={styles.AadharContainer1} onPress={this._pickImage}>
        {image && <Image
         style={{width:widthPercentageToDP('80%'),height:heightPercentageToDP('25%'),borderRadius:8}}
         source={{uri: image == null ? AadharFrontDummy : image}}
         resizeMode='contain'
                       />}
    </TouchableOpacity>
</View>

<View style={styles.AadharContainer2}>
    <TouchableOpacity style={styles.AadharContainer1} onPress={this._pickImage1}>
        {image1 && <Image
          style={{width:widthPercentageToDP('80%'),height:heightPercentageToDP('25%'),borderRadius:8}}
          source={{uri: image1 == null ? AadharBackDummy : image1}}
          resizeMode='contain'
                       />}
    </TouchableOpacity>
</View>
</View>

<View style={styles.infoContainer}>
    <Text style={styles.TNCfirstline}>By Signing Up, You Agree Our 
    <Text style={styles.TNCfirstlinelw}> Terms,</Text></Text>
    <TouchableOpacity onPress={() => {this.setModalVisible(true);}}>
    <Text style={styles.TNCsecondline}>Data Policy & Cookies Policy</Text>
    </TouchableOpacity>
</View>

<View style={styles.btnContainer}>
<TouchableOpacity style={styles.btns} onPress={() => this.props.navigation.navigate('Registerscreen3')}><Text style={styles.btnText}>Back</Text></TouchableOpacity>
       <TouchableOpacity style={styles.btns}><Text style={styles.btnText} onPress={() => this.showFinalData()}>Next</Text></TouchableOpacity>
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

      </SafeAreaView>
      </ScrollView>
     
       ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

export default RegisterScreen2;
