import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator,ScrollView,Image,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';



export default class NotificationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false
        };
      }
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf')
    
        });
        this.setState({fontLoaded:true})
      }

  render() {
    return (
      <View style={styles.container}>
           {this.state.fontLoaded == true ?(
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>Notifications</Text>
          </View>
           <ScrollView style={styles.container}>
            <TouchableOpacity>
              <View style={styles.Notifications}>
                <View style={{flexDirection:'row'}}>
                 <View style={styles.ProfileImg}>
                   <Image 
                     source={require('../../../assets/profile/profile.jpg')}
                     style={styles.ProfilePic}
                   />
                 </View>
                 <View style={{marginLeft:10}}>
                   <Text style={{fontSize:RFValue(16),fontWeight:'600'}}>Username</Text>
                   <Text style={{fontSize:RFValue(16),fontWeight:'100'}}>liked your photo</Text>
                 </View>
                 </View>
              </View>
              </TouchableOpacity>
           </ScrollView>
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
    },
    Header:{
      width:widthPercentageToDP('100%'),
      height:heightPercentageToDP('10%'),
      backgroundColor:'#252525',
      alignItems:'center',
      justifyContent:'center',
      position:'absolute'
    },
    HeaderText:{
      fontSize:RFValue(16),
      fontWeight:"400",
      color:'#fff'
    },
    Notifications:{
      width:widthPercentageToDP('98%'),
      height:heightPercentageToDP('10%'),
      backgroundColor:'#C8C8C8',
      marginTop:heightPercentageToDP('12%'),
      marginLeft:heightPercentageToDP('0.6%'),
      alignContent:'flex-start',
      justifyContent:'center'
    },
    ProfileImg:{
      width:widthPercentageToDP('15%'),
      height:heightPercentageToDP('8%'),
      borderRadius:5,
      marginLeft:5
    },
    ProfilePic: {
       width:widthPercentageToDP('15%'),
       height:heightPercentageToDP('8%'),
       borderRadius:5
    }
})


