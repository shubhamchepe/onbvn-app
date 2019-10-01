import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator, TouchableOpacity, 
  AsyncStorage, StatusBar , ScrollView,Animated,Dimensions,Modal,AppState} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP,heightPercentageToDP} from '../RegisterScreen/ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import RightDrawerIcon from '../../ProfileScreenButtons/RightDrawerIcon';
import LeftDrawerIcon from '../../ProfileScreenButtons/LeftDrawerIcon';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';
import { withNavigation } from "react-navigation";
const { width:width } = Dimensions.get("window");


export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false,
            modalVisible: false,
            active: 0,
            xTabOne: 0,
            xTabTwo: 0,
            translateX: new Animated.Value(0),
            translateXTabOne: new Animated.Value(0),
            translateXTabTwo: new Animated.Value(width),
            translateY: -1000,
            User:{},
            UserIDFromAsync:'',
            ShowBtn:false,
            LoadProfile:false,
            DataFromEditProfile:{},
            appState: AppState.currentState
        };
        this.GetIdOfLoggedInUser = this.GetIdOfLoggedInUser.bind(this)
        this.CheckIfItsMyProfile = this.CheckIfItsMyProfile.bind(this)
        this.PreLoadProfile = this.PreLoadProfile.bind(this)
        this._handleAppStateChange = this._handleAppStateChange.bind(this)
      }

      setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
      }
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../../../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../../../assets/fonts/Montserrat-ExtraLight.ttf'),
          'Montserrat-Regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
          'Roboto': require('../../../assets/fonts/Roboto.ttf'),
          'Roboto_medium': require('../../../assets/fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({fontLoaded:true});
      }

              //setInterval(this.GetIdOfLoggedInUser(), 3000);
      async componentWillMount(){
        //this.GetIdOfLoggedInUser();
        const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.GetIdOfLoggedInUser();
    });
        //AppState.addEventListener('change', this._handleAppStateChange);
        }


      async componentWillUnmount(){
        this.setState({
          modalVisible:false
        })
        this.setModalVisible();
        //AppState.addEventListener('change', this._handleAppStateChange);
        this.focusListener.remove();
      }

      _handleAppStateChange = nextAppState => {
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
          console.log('App has come to the foreground!');
        }
        this.setState({ appState: nextAppState });
        console.log(this.state.appState);
      };

      Logout = async () => {
        try {
          await AsyncStorage.removeItem('LoginToken');
          console.log('Token Removed From Async Storage');
          await this.props.navigation.navigate('Loginscreen1');
          }
           catch (error) {
          // Deleting Error
          console.log(`ERROR OCCURED ${error}`)
        }
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
      this.CheckIfItsMyProfile();
      this.PreLoadProfile();
    })
        } catch(error){
            console.log(error);
        }
      }

      CheckIfItsMyProfile = async () => {
         try{
           let UserID = this.state.User._id;
           let AsyncID = this.state.UserIDFromAsync;
           console.log(`UserID:${UserID}`);
           console.log(`AsyncID:${AsyncID}`);
             if(UserID == AsyncID){
               this.setState({
                 ShowBtn:false
               })
             } else{
               this.setState({
                 ShowBtn:true
               })
             }
         } catch(error){
           console.log(error);
           
         }
      }


      PreLoadProfile = async () => {
        try{
           let UserData = this.state.User;
           if(UserData !== {}){
             this.setState({
               LoadProfile:true
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

       handleSlide = type => {
        let {
          active,
          xTabOne,
          xTabTwo,
          translateX,
          translateXTabOne,
          translateXTabTwo
      } = this.state;
      Animated.spring(translateX, {
          toValue: type,
          duration: 100
      }).start();
      if (active === 0) {
          Animated.parallel([
              Animated.spring(translateXTabOne, {
                  toValue: 0,
                  duration: 100
              }).start(),
              Animated.spring(translateXTabTwo, {
                  toValue: width,
                  duration: 100
              }).start()
          ]);
      } else {
          Animated.parallel([
              Animated.spring(translateXTabOne, {
                  toValue: -width,
                  duration: 100
              }).start(),
              Animated.spring(translateXTabTwo, {
                  toValue: 0,
                  duration: 100
              }).start()
          ]);
      }
      };

      

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
  } = this.state;
  AppState.addEventListener('change', this._handleAppStateChange);
    return (
      <Container>
        <StatusBar hidden />
           {this.state.fontLoaded == true && this.state.LoadProfile == true ?(
        <Container>
          <StatusBar hidden />
          {/* <Header
         style={{ backgroundColor:'#ffffff'}}
        > */}
          {/* <Left>
            <Button transparent>
            <Ionicons name="" size={32} color="green" />
            </Button>
          </Left> */}
          {/* <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
            <Ionicons name="md-more" size={32} color="#000000" onPress={() => this.props.navigation.openDrawer()}/>
            </Button>
          </Right>
        </Header> */}
        <ScrollView>
        <View style={styles.container}>
           {/* <Text style={{fontFamily: 'Montserrat-Black',fontSize:15,color:'#000000'}}> ProfileScreen </Text>
           <TouchableOpacity onPress={() => this.Logout()}>
             <Text style={{color:'#000000'}}>Logout</Text>
           </TouchableOpacity> */}
           <TouchableOpacity>
            <Image
          style={{
            width:widthPercentageToDP('100%'), 
            height:heightPercentageToDP('40%'),
            alignItems:'center',
            justifyContent:'center'
                }}
          source={require('../../../assets/profile/profile.jpg')}
        >
        </Image>
        </TouchableOpacity>
        <View 
        style={{
          flex:1,
          position:'absolute',
          flexDirection: 'row',
          zIndex: 2000,
          justifyContent:'flex-start',
          alignItems:'flex-end',
          margin:10
        }}
        >
          <Right>
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
        <RightDrawerIcon/>
        </TouchableOpacity>
        </Right>
        </View>
        <View 
        style={{
          flex:1,
          position:'absolute',
          flexDirection: 'row',
          zIndex: 2000,
          justifyContent:'flex-start',
          alignItems:'flex-start',
          margin:10
        }}
        >
          <Left>
            
        <LeftDrawerIcon/>
    
        </Left>
        </View>
        <View style={styles.NumInfoBox}>
          <View style={styles.CardProfileContainer}>
            <Image
             source={require('../../../assets/profile/profile.jpg')}
             style={styles.CardProfilePic}
            />
          </View>
           <View style={styles.CardNameContainer}>
             <Text style={styles.CardNameStyle}>{this.state.User.firstname}{' '}{this.state.User.lastname}</Text>
           </View>
           {this.state.User.city !== '' ? (
              <View style={styles.CardLocNameContainer}>
              <Text style={styles.CardLocationName}>{this.state.User.city},India</Text> 
            </View>
           ) : (
            <View style={styles.CardLocNameContainer}>
            <Text style={styles.CardLocationName}>{' '}</Text> 
          </View>
           )}
           
              <View style={styles.NumContainer}>
                <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:RFValue(15),fontFamily:'Montserrat-ExtraBold'}}>200</Text>
                <Text style={{fontSize:RFValue(8),fontFamily:'Montserrat-ExtraBold'}}>Followers</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:RFValue(15),fontFamily:'Montserrat-ExtraBold'}}>1.2K</Text>
                <Text style={{fontSize:RFValue(8),fontFamily:'Montserrat-ExtraBold'}}>Following</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Text style={{fontSize:RFValue(15),fontFamily:'Montserrat-ExtraBold'}}>60</Text>
                <Text style={{fontSize:RFValue(8),fontFamily:'Montserrat-ExtraBold'}}>Posts</Text>
                </View>
              </View>
              {this.state.ShowBtn == false ? (<Text>{''}</Text>) : (
               <View style={styles.followBtn}>
               <TouchableOpacity style={{
                 backgroundColor:'#646698',
                 width:widthPercentageToDP('25%'),
                 height:heightPercentageToDP('4%'),
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:15
               }} onPress={() => {this.setModalVisible(true);}}>
                 <Text style={{
                   color:'#fff',
                   fontSize:RFValue(10),
                   fontFamily:'Montserrat-ExtraBold'
                 }}>Friends?</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                 backgroundColor:'#7FC79A',
                 width:widthPercentageToDP('25%'),
                 height:heightPercentageToDP('4%'),
                 alignItems:'center',
                 justifyContent:'center',
                 borderRadius:15
               }}>
                 <Text style={{
                   color:'#fff',
                   fontSize:RFValue(10),
                   fontFamily:'Montserrat-ExtraBold'
                 }}>Message</Text>
               </TouchableOpacity>
             </View>
              )} 
          </View> 
        <View style={{width:widthPercentageToDP('90%'),
                    marginLeft:'auto',
                   marginRight:'auto'}}>
               <View style={{
                 height:heightPercentageToDP('5%'),
                 backgroundColor:'#D9D9D9',
                 flexDirection:'row',
                 marginTop:heightPercentageToDP('1%'),
                 borderRadius:20,
                 position:'relative'}}>
               <Animated.View 
               style={{
                 position:'absolute',
                 width:widthPercentageToDP('45%'),
                 height:heightPercentageToDP('5%'),
                 top:0,
                 left:0,
                 backgroundColor:'#EAEAEA',
                 borderTopLeftRadius: 20,
                 borderBottomLeftRadius:20,
                 transform:[{
                   translateX
                 }]
               }}
               />
           <TouchableOpacity style={styles.TabBtn1}
             onLayout={event => this.setState({xTabOne: event.nativeEvent.layout.x})}
             onPress={() =>
              this.setState({ active: 0 }, () =>
                  this.handleSlide(xTabOne)
              )
          }>
             <Text style={{fontSize:RFValue(10),fontFamily:'Montserrat-ExtraBold',color: active === 0 ? "#4A4A4A" : "#8B8B8B"}}>About</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.TabBtn2}
             onLayout={event => this.setState({xTabTwo: event.nativeEvent.layout.x})}
             onPress={() =>
              this.setState({ active: 1 }, () =>
                  this.handleSlide(xTabTwo)
              )
          }>
             <Text style={{fontSize:RFValue(10),fontFamily:'Montserrat-ExtraBold',color: active === 1 ? "#4A4A4A" : "#8B8B8B"}}>Posts</Text>
           </TouchableOpacity>  
           </View> 
           <ScrollView>
           <Animated.View style={{
             flex:1,
             backgroundColor:'#fff',
             height:heightPercentageToDP('40%'),
             borderRadius:5,
             marginTop: 5,
             transform:[{
               translateX: translateXTabOne
             }]}}
             onLayout={event =>
              this.setState({
                  translateY: event.nativeEvent.layout.height
              })
          }>
             <View style={styles.AboutContainer}>
               {this.state.User.BIO !== '' ? (
                  <View>
                  <Text style={styles.AboutHeadTexts}>
                    Bio:<Text>{"  "}</Text><Text style={styles.AboutBioText}>
                    {this.state.User.BIO}
                    </Text>
                 </Text>
                 {this.state.User.link1 == '' ? (
                   <Text>{''}</Text>
                 ) : (
                  <Text style={styles.AboutHeadTexts}>
                  Link(1):<Text>{"  "}</Text> 
                    <Text style={styles.AboutLinkText}>{this.state.User.link1}</Text>
                  </Text>
                 )}
                    
                    
                    <Text style={styles.AboutHeadTexts}>
                    Link(2):<Text>{"  "}</Text> 
                      <Text style={styles.AboutLinkText}>{this.state.User.link2}</Text>
                    </Text>
                    <View>            
                 <Text style={styles.AboutHeadTexts}>
                   Hobbies:<Text>{"  "}</Text><Text style={styles.AboutBioText}>
                  {this.HobbySplit}
                 </Text>
                 </Text>
                 <Text style={styles.AboutHeadTexts}>
                 Favourite Brands:<Text>{"  "}</Text><Text style={styles.AboutBioText}>
                  Patanjali,Dabur,Micromax,Amul
                 </Text>
                 </Text>
                 </View>  
                    </View>

               ) : (<View style={{
                 alignItems:'center'
               }}><TouchableOpacity style={{
                 width:widthPercentageToDP('40%'),
                 height:heightPercentageToDP('6%'),
                 backgroundColor:'#505050',
                 borderRadius:5,
                 alignItems:'center',
                 justifyContent:'center'
                 }} onPress={() => this.props.navigation.navigate('Editprofilescreen')}>
                  <Text style={{
                    fontSize:RFValue(10),
                    fontWeight:'600',
                    color:'#fff'
                  }}>Add Something About You</Text>
               </TouchableOpacity></View>)}
               <Text style={styles.AboutHeadTexts}>Total Friends: 86</Text>
               <Text style={styles.AboutHeadTexts}>Langoti Yars: 6</Text>
               <Text style={styles.AboutHeadTexts}>Colony Friends: 40</Text>
               <Text style={styles.AboutHeadTexts}>Work Mates: 40</Text>
              
               

             </View>
           </Animated.View>

           <Animated.View style={{
             justifyContent:'center',
             alignItems:'center',
             transform:[{
              translateX: translateXTabTwo
            },{
              translateY: -translateY
            }]}}>
              <View style={styles.photosCard}>
            {/* <Text style={styles.cardTittle}>Photos</Text>    */}
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar2.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar3.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar4.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar5.png"}} />
              <Image style={styles.photo} source={{uri: "https://bootdey.com/img/Content/avatar/avatar6.png"}} />
            </View>
          </View>
           </Animated.View>
        </ScrollView>   
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
            <View style={{width: widthPercentageToDP('70%'),
            height: heightPercentageToDP('35%'),
            backgroundColor:'#EAEAEA',borderRadius:8}}>
              <Text style={styles.ModalTexth1}>Who is this person of yours ?</Text>
              <ScrollView>
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{
                  backgroundColor:'#646698',
                  width:widthPercentageToDP('50%'),
                  height:heightPercentageToDP('5%'),
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:20,
                  margin: 7
               }}  onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                 <Text style={{
                    color:'#fff',
                    fontSize:RFValue(13),
                    fontFamily:'Montserrat-ExtraBold'
                  }}>Langoti Yarr</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                  backgroundColor:'#646698',
                  width:widthPercentageToDP('50%'),
                  height:heightPercentageToDP('5%'),
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:20,
                  margin: 7
               }}  onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                 <Text style={{
                    color:'#fff',
                    fontSize:RFValue(13),
                    fontFamily:'Montserrat-ExtraBold'
                  }}>Colony Friend</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                  backgroundColor:'#646698',
                  width:widthPercentageToDP('50%'),
                  height:heightPercentageToDP('5%'),
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:20,
                  margin: 7
               }}  onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                 <Text style={{
                    color:'#fff',
                    fontSize:RFValue(13),
                    fontFamily:'Montserrat-ExtraBold'
                  }}>Work Mate</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{
                  backgroundColor:'#646698',
                  width:widthPercentageToDP('50%'),
                  height:heightPercentageToDP('5%'),
                  alignItems:'center',
                  justifyContent:'center',
                  borderRadius:20,
                  margin: 7
               }}  onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
                 <Text style={{
                    color:'#fff',
                    fontSize:RFValue(13),
                    fontFamily:'Montserrat-ExtraBold'
                  }}>Just A Friend</Text>
               </TouchableOpacity>
                </View>
              {/* <View style={styles.ModalDismissBtnPos}>
              <TouchableHighlight
              style={styles.hideModal}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{color:'#fff',fontFamily:'Montserrat-Regular',fontWeight:'700'}}>Got It</Text>
              </TouchableHighlight>
              </View> */}
              </ScrollView>
            </View>
          </View>
        </Modal>
        </View> 
        </ScrollView>     
        </Container>
        
        ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    NumInfoBox:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      backgroundColor:'#D9D9D9',
      width:widthPercentageToDP('90%'),
      height:heightPercentageToDP('20%'),
      borderRadius:10,
      zIndex:2000,
      marginTop:heightPercentageToDP('-10%'),
    },
    CardProfileContainer:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    },
    CardProfilePic:{
      width:widthPercentageToDP('25%'),
      height:heightPercentageToDP('15%'),
      borderRadius:10,
      margin:10
    },
    CardNameContainer:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      paddingLeft:130,
      bottom:120
    },
    CardNameStyle:{
      fontSize:RFValue(20),
      fontFamily:'Montserrat-ExtraBold'
    },
    CardLocNameContainer:{
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'flex-start',
      marginLeft:135,
      bottom:90
    },
    CardLocationName:{
      fontSize:RFValue(10),
      fontFamily:'Montserrat-ExtraBold'
    },
    NumContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'flex-start',
      bottom:80,
      marginLeft:110,
      width:widthPercentageToDP('60%')
    },
    BioContainer:{
      flex:1,
      top:0,
       width:widthPercentageToDP('90%'),
       height:heightPercentageToDP('20%'),
       borderRadius:8,
       backgroundColor:'#ffffff',
       marginTop:8
    },
    followBtn:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'flex-start',
      bottom:65,
      marginLeft:110,
      width:widthPercentageToDP('60%')
    },
    PostContainer:{
      width:widthPercentageToDP('100%'),
      height:heightPercentageToDP('100%'),
      backgroundColor:'#ffffff', //change colour to red to debug
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    PostPic:{
      width:widthPercentageToDP('33.3%'),
      height:heightPercentageToDP('20%'),
      borderRadius:3,
      margin:2
    },
    TabBtn1:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#EAEAEA',
      borderRadius:4,
      borderRightWidth:0,
      borderTopRightRadius:0,
      borderBottomRightRadius:0
    },
    TabBtn2:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderColor:'#EAEAEA',
      borderRadius:4,
      borderLeftWidth:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:0
    },
    AboutContainer:{
      paddingLeft:10
    },
    AboutHeadTexts:{
      fontSize:RFValue(13),
      fontFamily:'Montserrat-ExtraBold',
      margin: 5,
    },
    AboutBioText:{
      fontSize:RFValue(11),
      fontFamily:'Montserrat-ExtraLight',
      fontWeight: "600",
      marginLeft:10,
    },
    AboutLinkText:{
      fontSize:RFValue(13),
      fontFamily:'Montserrat-ExtraLight',
      fontWeight: "500",
      marginLeft:10,
      color:'#20248F'
    },
    photosContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      height: 'auto',
    },
    photosCard:{
      marginTop:10,
    },
    photo:{
      width:113,
      height:113,
      marginTop:5,
      marginRight:5,
    },
    cardTittle:{
      color:"#808080",
      fontSize:22,
      marginBottom:5,
    },
    modal:{
      width:widthPercentageToDP('90%'),
      alignItems:'center',
      borderRadius:10
    },
    hideModal:{
      backgroundColor:'#67e6dc',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginTop: heightPercentageToDP('5%'),
      marginLeft:widthPercentageToDP('25%'),
      marginRight:widthPercentageToDP('25%'),
      height:heightPercentageToDP('5%'),
      borderRadius:8,
    },
    ModalTexth1:{
      alignItems:'center',
      textAlign:'center',
      color:'#A4A4A4',
      fontFamily:'Montserrat-Regular',
      fontWeight:'500',
      paddingTop:10
    },
    ModalTextp:{
      textAlign:'center',
      color:'#fff',
      marginLeft:20,
      marginRight:20,
      paddingTop: 10,
      fontFamily:'Montserrat-Regular',
      fontSize:26,
      fontWeight:'100'
    },
    ModalDismissBtnPos:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end',
      bottom:20
    }
})
