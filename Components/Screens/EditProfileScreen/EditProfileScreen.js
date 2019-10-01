import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator, TouchableOpacity,StatusBar,TextInput,AsyncStorage,
  ScrollView,Modal,TouchableHighlight} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import MultiSelectView from 'react-native-multiselect-view';
const axios = require('axios');
var HobbyData = [
  'Learning', 'Gardening', 'Writing', 'Exercise', 'Cooking', 'Photography',
  'Dance', 'Knitting', 'Hiking', 'Painting', 'Hunting', 'Video Games',
  'Drawing', 'Running', 'Cycling', 'Sewing', 'Shopping', 'Crochet',
  'Football', 'Genealogy', 'Chess', 'Toys', 'Computer Programming', 'Wood Working',
  'Brewing', 'Coin-Collecting', 'Stamp-Collecting', 'Reading', 'Handicraft', 'sagittis',
  'Origami', 'Embriodery', 'Pottery', 'Model Building', 'Board Games', 'Archery',
  'Sailing', 'Calligraphy', 'Scuba Diving', 'Camping', 'Underwater Diving', 'Bagpacking',
  'Guitars', 'Writing', 'Brand Making', 'Product Discovery', 'Food', 'Fruits',
  'Cooking', 'Teaching Pets', 'Tea', 'Coffee', 'Yoga', 'Meditation',
  'Technology', 'Small Electronics', 'Gaming', 'Coding', 'Horse Riding', 'Biking',
  'Cleaning', 'Politics', 'Numerology', 'Palm Reading', 'Face Reading', 'Movies',
  'Netflix', 'Youtube', 'Researching', 'Talking', 'Music', 'Rapping'
];

var BrandData = [
  'Tata', 'Relaince', 'Airtel', 'Hdfc', 'LIC', 'SBI',
  'Infosys', 'ICICI Bank', 'Godrej', 'Maruti Suzuki', 'L&T', 'Bajaj',
  'Wipro', 'Axis Bank', 'Hero', 'HCL', 'ITC', 'Asian Paints',
  'Tanishq', 'D-Mart', 'Samsung', 'Apple', 'Google', 'Microsoft',
  'Big-Bazar', 'Big Basket', 'Ola', 'Haldirams', 'Flipkart', 'Amazon',
  'Gaana', 'Kotak Bank', 'Paytm', 'Udemy', 'Myntra', 'OYO',
  'Spotify', 'Jabong', 'Lenskart', 'Zomato', 'HealthKart', 'BookMyShow',
  'Swiggy', 'Uber', 'Brand Making', 'Product Discovery', 'Food', 'Fruits',
  'Cooking', 'Teaching Pets', 'Tea', 'Coffee', 'Yoga', 'Meditation',
  'Technology', 'Small Electronics', 'Gaming', 'Coding', 'Horse Riding', 'Biking',
  'Cleaning', 'Politics', 'Numerology', 'Palm Reading', 'Face Reading', 'Movies',
  'Netflix', 'Youtube', 'Researching', 'Talking', 'Music', 'Rapping'
];


export default class EditProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false,
            modal1Visible: false,
            modal2Visible: false,
            UpdateBio:'',
            UpdateLink1:'',
            UpdateLink2:'',
            SelectedBrands:[],
            SelectedHobbies:[],
            User:{},
            LoadProfile:false,
            Link1BoxColor:'#E8E8E8',
            Link2BoxColor:'#E8E8E8',
            DisableDone:false
        };
        this.GetIdOfLoggedInUser = this.GetIdOfLoggedInUser.bind(this)
        this.PreLoadProfile = this.PreLoadProfile.bind(this)
        this.EditProfile = this.EditProfile.bind(this)
        this.testlink1 = this.testlink1.bind(this)
        this.FetchBrandValues = this.FetchBrandValues.bind(this)
        this.FetchHobbyValues = this.FetchHobbyValues.bind(this)
        this.AlreadyCheckedHobbies = this.AlreadyCheckedHobbies.bind(this)
      }
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
          'Roboto': require('../../../assets/fonts/Roboto.ttf'),
          'Roboto_medium': require('../../../assets/fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({fontLoaded:true})
        this.GetIdOfLoggedInUser();
      }

      async componentWillMount(){
        this.GetIdOfLoggedInUser();
      }

      async componentWillUnmount(){
        this.setModal1Visible();
        this.setModal2Visible();
      }

      GetIdOfLoggedInUser = async() => {
        try{
          let InfoFromAsync = await AsyncStorage.getItem('LoginToken');
          InfoFromAsync = JSON.parse(InfoFromAsync);
          GetUserId = InfoFromAsync.UserID;
           console.log(GetUserId);
           this.setState({UserIDFromAsync:GetUserId})
           fetch(`http://192.168.245.2:3000/getUserById/${GetUserId}`)
    .then((response) => response.json())
    .then((responseJson) => {
     // return responseJson.firstname;
      console.log(responseJson.firstname);
      this.setState({User:responseJson})
      this.PreLoadProfile();
      this.AlreadyCheckedHobbies();
    })
        } catch(error){
            console.log(error);
        }
      }

       testlink1 = (str) => {
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        str = this.state.UpdateLink1
        if (regexp.test(str))
        {
          this.setState({
           Link1BoxColor:'#9EF266',
           DisableDone:false
          })
        }
        else
        {
          this.setState({
            Link1BoxColor:'#F26666',
            DisableDone:true
          })
        }
      }
      
      testlink2 = (str) => {
        regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        str = this.state.UpdateLink2
        if (regexp.test(str))
        {
          this.setState({
           Link2BoxColor:'#9EF266',
           DisableDone:false
          })
        }
        else
        {
          this.setState({
            Link2BoxColor:'#F26666',
            DisableDone:true
          })
        }
      }

      EditProfile = async () => {
        const Token = await AsyncStorage.getItem('LoginToken', (err,res) => {
          if(err){
            console.log(err);
          } else {
              const result = JSON.parse(res);
            //  console.log(`After Parsing :${result}`);
            //  console.log(`Token Is Here :${result.Token}`);
             
           var TokenFromAsyncStorage = result.Token;
          //  console.log(TokenFromAsyncStorage);
           TokenFromAsyncStorage.replace(/\"/g, "");                  
          }
        })
        let result1 = JSON.parse(Token);
        console.log(`Value Of Token After Parsing: ${result1.Token}`);
        var url = 'http://192.168.245.2:3000/UpdateFields';
        var data = {BIO: this.state.UpdateBio,
          link1: this.state.UpdateLink1,
          link2:this.state.UpdateLink2,
          BrandUserLoves: this.state.SelectedBrands,
          Hobby: this.state.SelectedHobbies};
        
        
        
        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + result1.Token
          }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response))).then(this.props.navigation.navigate('Profilescreen',{
          DataFromEditToProfile: data
        }))
        .catch(error => console.error('Error:', error));
      }

     

      PreLoadProfile = async () => {
        try{
           let UserData = this.state.User;
           if(UserData !== {}){
             this.setState({
               LoadProfile:true,
               UpdateBio:this.state.User.BIO,
               UpdateLink1:this.state.User.link1,
               UpdateLink2:this.state.User.link2
             })
           } else{
             this.setState({
               LoadProfile:false
             })
           }
        } catch(error){
          console.log(error);
        }
      }

      setModal1Visible = (visible) => {
        this.setState({modal1Visible: visible});
      }

      setModal2Visible = (visible) => {
        this.setState({modal2Visible: visible});
      }

      FetchBrandValues = () => {
        let ObjArray = this.refs.list2.selectedItems();
           var result = ObjArray.map(({value}) => value)
           console.log(result);
           this.setState({SelectedBrands: result})
      }

      FetchHobbyValues = () => {
        let ObjArray = this.refs.list1.selectedItems();
           var result = ObjArray.map(({value}) => value)
           console.log(result);
           this.setState({SelectedHobbies: result})
      }

      AlreadyCheckedHobbies = () => {
        if(this.state.User.Hobby !== []){
          const data = this.state.User.Hobby;
          return data.filter((item) => item.checked).map((item) => {
            return item;
          });
        }
        console.log(`These Are Already Selected Values: ${item}`);
        
      }

  render() {
    return (
      <Container>
        <StatusBar hidden />
           {this.state.fontLoaded == true && this.state.LoadProfile == true ? (
        <Container>
          <StatusBar hidden />
        <View style={styles.container}>
           {/* <Text style={{fontFamily: 'Montserrat-Black',fontSize:15,color:'#fff'}}> EditProfileScreen </Text> */}
           <View style={styles.Header}>
              <Text style={styles.HeaderText}>Edit Profile</Text>
           </View>
           <ScrollView>
           <View style={styles.EditContainer}>
           <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={styles.TextHead} >Name :</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.TextHeadValue} >{this.state.User.firstname}{' '}{this.state.User.lastname}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={styles.TextHead} >Username :</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.TextHeadValue} >{this.state.User.username}</Text>
                    </View>
                </View>
               <Text style={styles.TextHead}>Bio :</Text>
               <View style={{alignContent:'center'}}>
               {this.state.User.BIO !== '' ? (
                  <TextInput
                  editable
                  maxLength={180}
                  multiline={true}
                  style={styles.EditBio}
                  //defaultValue={this.state.User.BIO}
                  onChangeText={(text) => this.setState({UpdateBio: text})}
                  value={this.state.UpdateBio}
                  UpdatedBio={this.state.UpdateBio}
                  />
               ) : <TextInput 
               editable
               maxLength={180}
               multiline={true}
               style={styles.EditBio}
               placeholder={'Edit Bio'}
               onChangeText={(UpdateBio) => this.setState({UpdateBio})}
               value={this.state.UpdateBio}
               />}
              </View> 
               <Text style={styles.TextHead}>Link 1 :</Text>
               <View style={{alignContent:'center'}}>
                 {this.state.User.link1 !== '' ? (
                  <TextInput 
                  editable
                  style={[styles.EditLink1,{borderWidth:1,borderColor:this.state.Link1BoxColor}]}
                  onChangeText={UpdateLink1 => {this.setState({UpdateLink1}); this.testlink1(this.state.UpdateLink1)}}
                  value={this.state.UpdateLink1}
                  />
                 ): (
                  <TextInput 
                  editable
                  style={[styles.EditLink1,{borderWidth:1,borderColor:this.state.Link1BoxColor}]}
                  placeholder={'Edit Link 1'}
                  onChangeText={UpdateLink1 => {this.setState({UpdateLink1}); this.testlink1(this.state.UpdateLink1)}}
                  value={this.state.UpdateLink1}
                  />
                 )}
               
              </View> 
               <Text style={styles.TextHead}>Link 2 :</Text>
               <View style={{alignContent:'center'}}>
                 {this.state.User.link2 !== '' ? (
                 <TextInput 
                 editable
                 style={[styles.EditLink2,{borderWidth:1,borderColor:this.state.Link2BoxColor}]}
                 onChangeText={UpdateLink2 => {this.setState({UpdateLink2}); this.testlink2(this.state.UpdateLink2)}}
                 value={this.state.UpdateLink2}
                 />
                 ) : (
                  <TextInput 
                  editable
                  style={[styles.EditLink2,{borderWidth:1,borderColor:this.state.Link2BoxColor}]}
                  placeholder={'Edit Link 2'}
                  onChangeText={UpdateLink2 => {this.setState({UpdateLink2}); this.testlink2(this.state.UpdateLink2)}}
                  value={this.state.UpdateLink2}
                  />
                 )}
               
              </View> 
              <View>
                <Text style={styles.TextHead}>Hobbies :</Text>
                
                 <TouchableOpacity
                style={{
                  width:widthPercentageToDP('90%'),
                  height:heightPercentageToDP('6%'),
                  backgroundColor:'#E1E1E1',
                  borderRadius:5,
                  justifyContent:'center'
                  }} onPress={() => {this.setModal1Visible(true);}}>
                     <View style={{flexDirection:"row"}}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{
                           fontSize:RFValue(13),
                           fontWeight:'400',
                           color:'#8B8B8B',
                           marginLeft:10,
                        }} >Select Your Hobbies</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                    <Ionicons name="md-arrow-dropright" size={32} color="green" />
                    </View>
                </View>
                </TouchableOpacity>
                </View>
                <View>
                <Text style={styles.TextHead}>Hobbies :</Text>
                
                 <TouchableOpacity
                style={{
                  width:widthPercentageToDP('90%'),
                  height:heightPercentageToDP('6%'),
                  backgroundColor:'#E1E1E1',
                  borderRadius:5,
                  justifyContent:'center'
                  }} onPress={() => {this.setModal2Visible(true);}}>
                     <View style={{flexDirection:"row"}}>
                    <View style={{justifyContent:'center'}}>
                        <Text style={{
                           fontSize:RFValue(13),
                           fontWeight:'400',
                           color:'#8B8B8B',
                           marginLeft:10,
                        }} >Select Favourite Brands</Text>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end',marginRight:10}}>
                    <Ionicons name="md-arrow-dropright" size={32} color="green" />
                    </View>
                </View>
                </TouchableOpacity>
                </View>
               {/* <Text>Fav Brands :</Text>  */}
           </View>
           
           <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
           <View style={styles.footerBtnContainer}>
              <TouchableOpacity style={styles.CancelBtn} onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.CancelTxt}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.DoneBtn} disabled={this.state.DisableDone} onPress={() => this.EditProfile()}>
                <Text style={styles.DoneTxt}>Done</Text>
              </TouchableOpacity>
           </View>
           </View>
           <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modal1Visible}
          onRequestClose={() => {
            this.setModal1Visible(!this.state.modal1Visible);
          }}>
          <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <View style={{width: widthPercentageToDP('98%'),
            height: heightPercentageToDP('98%'),
            backgroundColor:'#F5F5F5',borderRadius:8}}>
              <Text style={styles.ModalTexth1}>Select Your Hobbies</Text>
              <ScrollView>
                <View>
              <MultiSelectView
                 ref='list1'
                 data={HobbyData}
                 onSelectionStatusChange={this.AlreadyCheckedHobbies}
                activeContainerStyle={styles.activeCom}
                inactiveContainerStyle={styles.inactiveCom}
                 activeTextStyle={styles.activeText}
                 inactiveTextStyle={styles.inactiveText}
                   />
                   <TouchableOpacity onPress={() => { this.FetchHobbyValues(), this.setModal1Visible(!this.state.modal1Visible); }} >
            <View style={styles.button}>
              <Text style={styles.text1}>Done</Text>
            </View>
          </TouchableOpacity>
          </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modal2Visible}
          onRequestClose={() => {
            this.setModal2Visible(!this.state.modal2Visible);
          }}>
          <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <View style={{width: widthPercentageToDP('98%'),
            height: heightPercentageToDP('98%'),
            backgroundColor:'#F5F5F5',borderRadius:8}}>
              <Text style={styles.ModalTexth1}>Select Your Favourite Brand</Text>
              <ScrollView>
                <View>
              <MultiSelectView
                 ref='list2'
                 data={BrandData}
                activeContainerStyle={styles.activeCom}
                inactiveContainerStyle={styles.inactiveCom}
                 activeTextStyle={styles.activeText}
                 inactiveTextStyle={styles.inactiveText}
                   />
                   <TouchableOpacity onPress={() => { this.FetchBrandValues(), this.setModal2Visible(!this.state.modal2Visible); }} >
            <View style={styles.button}>
              <Text style={styles.text1}>Done</Text>
            </View>
          </TouchableOpacity>
          </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
           </ScrollView>
        </View>
        </Container>
        
        ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    Header:{
      position:'absolute',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('10%'),
        backgroundColor:'#252525',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    },
    HeaderText:{
      fontFamily: 'Montserrat-ExtraLight',
      fontSize: RFValue(15),
      fontWeight:"600",
      color:'#fff'
    },
    EditContainer:{
      marginTop:heightPercentageToDP('12%'),
      marginLeft:heightPercentageToDP('2%'),
      zIndex:-50
    },
    TextHead:{
      margin: 5,
      fontFamily: 'Montserrat-Black',
      fontSize: RFValue(15)
    },
    TextHeadValue:{
      margin: 5,
      fontFamily: 'Montserrat-ExtraLight',
      fontSize: RFValue(15)
    },
    EditBio:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('20%'),
      borderRadius:5,
      backgroundColor:'#E8E8E8',
      marginLeft:5,
      paddingLeft:5,
      flexDirection:'column',
      textAlignVertical:'top'
    },
    EditLink1:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#E8E8E8',
      borderRadius:5,
      marginLeft:5,
      paddingLeft:5,
    },
    EditLink2:{
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('8%'),
      backgroundColor:'#E8E8E8',
      borderRadius:5,
      marginLeft:5,
      paddingLeft:5,
    },
    footerBtnContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      margin:10
    },
    DoneBtn:{
      backgroundColor:'#88EC76',
      width:widthPercentageToDP('40%'),
      height:heightPercentageToDP('8%'),
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
    },
    CancelBtn:{
      backgroundColor:'#F56D33',
      width:widthPercentageToDP('40%'),
      height:heightPercentageToDP('8%'),
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center',
    },
    DoneTxt:{
      color:'#fff',
      fontFamily:'Montserrat-ExtraBold',
      fontSize:RFValue(13)
    },
    CancelTxt:{
      color:'#fff',
      fontFamily:'Montserrat-ExtraBold',
      fontSize:RFValue(13)
    },
    ModalTexth1:{
      alignItems:'center',
      textAlign:'center',
      color:'#A4A4A4',
      fontFamily:'Montserrat-Regular',
      fontWeight:'500',
      paddingTop:10
    },
    activeCom: {
      backgroundColor: '#47C340',
    },
    inactiveCom: {
      backgroundColor: '#FFFFFF',
    },
    activeText: {
      color: 'white',
    },
    inactiveText: {
      color: '#B4B4B4',
    },
    button: {
      alignItems: 'center',
    },
    text1: {
      backgroundColor: '#CFDBD5',
      padding: 10,
      borderWidth: 1,
      color: 'black',
    }
})





