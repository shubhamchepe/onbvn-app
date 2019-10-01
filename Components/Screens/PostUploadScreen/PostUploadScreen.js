import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator,Image,TextInput,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import {Asset} from 'expo-asset';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {Icon} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP, heightPercentageToDP } from '../RegisterScreen/ResponsiveFormula';
const PostUploadDummy = Asset.fromModule(require('../../../assets/images/postupload.jpg')).uri;



export default class PostUploadScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false,
            CaptionText:'',
            image:PostUploadDummy
        };
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
        aspect: [widthPercentageToDP('95%'), heightPercentageToDP('35%')],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
          'Roboto': require('../../../assets/fonts/Roboto.ttf'),
          'Roboto_medium': require('../../../assets/fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
    
        });
        this.setState({fontLoaded:true});
        this.getPermissionAsync();
      }

  render() {
    let { image, image1 } = this.state;
    return (
      <View style={styles.container}>
           {this.state.fontLoaded == true ?(
        <View style={styles.container}>
          <View style={styles.Header}>
            <View style={styles.IconAlignment}>
            <Icon name='md-close' style={styles.CloseIcon} onPress={() => this.props.navigation.goBack()}/>
            </View>
          </View>
          <View style={styles.ProfileImgCont}>
            <Image 
             source={require('../../../assets/profile/profile.jpg')}
             style={styles.ProPic} 
            />
            <View style={styles.UserInfoCont}>
            <Text style={styles.UsernameTxt}>Username</Text>
            <Text style={styles.CityTxt}>City, India</Text>
            </View>
          </View>
          <View style={styles.UploadImageView}>
            <TouchableOpacity style={styles.UploadImageView} onPress={this._pickImage}>
              {image && <Image
              style={{width:widthPercentageToDP('95%'),height:heightPercentageToDP('35%'),borderRadius:8}}
              source={{uri: image == null ? PostUploadDummy : image}}
              resizeMode='contain'
              />}
            </TouchableOpacity>
          </View>
          <View style={styles.CaptionContainer}>
            <TextInput 
              style={styles.CaptionBox}
              placeholder={'Any Caption...?'}
              onChangeText={(CaptionText) => this.setState({CaptionText})}
              value={this.state.CaptionText}
            />
          </View>
          {/* Feature To Add (Tag Friends & Add Location) */}
          <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
            <TouchableOpacity style={styles.FooterUploadBtnCont}>
               <Text style={{fontSize:RFValue(20),fontWeight:"600",textAlign:'center',color:'#fff'}}>Upload</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    Header:{
        position:'absolute',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        backgroundColor:'#252525',
        alignContent:'center',
        justifyContent:'center'
    },
    IconAlignment:{
       flexDirection:'row',
       justifyContent:'flex-end',
       marginRight:20
    },
    CloseIcon:{
      fontSize:RFValue(30),
      color:'#fff'
    },
    UploadImageView:{
      width:widthPercentageToDP('95%'),
      height:heightPercentageToDP('35%'),
      backgroundColor:'#fff',
      borderRadius:5,
      alignItems:'center',
      marginTop:10
    },
    ProfileImgCont:{
      width:widthPercentageToDP('95%'),
      height:heightPercentageToDP('10%'),
      //backgroundColor:'#595723', remove comment to debug
      marginTop:heightPercentageToDP('12%'),
      flexDirection:'row'
    },
    ProPic:{
      width:widthPercentageToDP('15%'),
      height:heightPercentageToDP('10%'),
      borderRadius:100
    },
    UserInfoCont:{
      flexDirection:'column',
      marginLeft:10
    },
    UsernameTxt:{
      flex:1,
      fontSize:RFValue(15),
      color:'#000000',
      paddingTop:10,
      fontWeight:"600"
    },
    CityTxt:{
      flex:1,
      fontSize:RFValue(15),
      color:'#000000',
      paddingBottom:8
    },
    CaptionContainer:{
      width:widthPercentageToDP('95%'),
      height:heightPercentageToDP('10%'),
      //backgroundColor:'#29B346', remove comment to debug
      marginTop:5
    },
    CaptionBox:{
      width:widthPercentageToDP('95%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#E8E8E8',
      paddingLeft:10,
      borderRadius:5,
      fontSize:RFValue(15)
    },
    FooterUploadBtnCont:{
      width:widthPercentageToDP('100%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#23C143',
      justifyContent:'center'
    }
})

