import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, ImageBackground, ScrollView, Dimensions, Image, StatusBar, TouchableOpacity, ListView, Platform, ActivityIndicator,FlatList} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator,
  withNavigation
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import GoToLoginScreenBtn from './App/Components/GoToLoginScreenBtn';
import BackButton from './App/Components/BackButton';
import ForgotPass from './App/Components/ForgotPass';
import LoginButton from './App/Components/LoginButton';
import GoToRegScreen from './App/Components/GoToRegScreen';
import GoToChatScreen from './App/Components/GoToChatScreen';
import GetStarted from './App/Components/GetStarted';
import splashImage from './App/Images/splashscreen.png';
import welcomescreen1 from './App/Images/welcomescreen1.png';
import welcomescreen2 from './App/Images/welcomescreen2.png';
import { TextInput } from 'react-native-gesture-handler';
import InnerHomeScreen from './App/AfterLGNorREGScreens/InnerHomeScreen';
import {Root} from 'native-base';
import { Container, Content, List, ListItem, Right, Left, Body, Header, Title, Toast, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import InnerProfileScreen from './App/AfterLGNorREGScreens/InnerProfileScreen';
import InnerNotificationScreen from './App/AfterLGNorREGScreens/InnerNotificationScreen';
import InnerSearchScreen from './App/AfterLGNorREGScreens/InnerSearchScreen';
import { fetchMeetups } from './constants/api';
import { CustomButton } from './App/Components/CustomButton';
import axios from 'react-native-axios';

const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {
  render() {
    
    return (
       <Root>
      <AppContainer>

      </AppContainer>
      </Root>

    );
  }
}

 class SplashScreen extends Component {
  render() {
    return (
      <ImageBackground source={splashImage} style={{width: '100%', height: '100%'}}>
       <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
  </ImageBackground>
    );
  }
}

class WelcomeScreens extends Component {
  render() {
    return (
       
          <ScrollView 
          horizontal={true}
          pagingEnabled={true}
          >
  <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
          <View style={styles.mainview}>
              <Image source={welcomescreen1} style={styles.ws} />
          </View>
          <View style={styles.mainview}>
              <Image source={welcomescreen2}  style={styles.ws}/>
              <GoToLoginScreenBtn style={{}}/>
          </View>

          </ScrollView>
       
    );
  }
}

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


class RegisterScreen extends Component {

   /** constructor(props) {
     super(props);

    this.onChangeFullName = this.onChangeFullName.bind(this);
     this.onChangeUserName = this.onChangeUserName.bind(this);
     this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
     this.onChangeEMail = this.onChangeEMail.bind(this);
     this.onChangePassword = this.onChangePassword.bind(this);
     this.onSubmit = this.onSubmit.bind(this);

     this.state = {
       full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: '',
     }
   }

   onChangeFullName(event){
     this.setState({
       full_name: event.target.value
     })
   }

   onChangeUserName(event) {
    this.setState({
      user_name: event.target.value
    })
  }

  onChangeMobileNumber(event) {
    this.setState({
      mobile_number: event.target.value
    })
  }

  onChangeEMail(event) {
    this.setState({
      e_mail: event.target.value
    })
  }

  onChangePassword(event) {
    this.setState({
      pass_word: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    
     console.log('Form Submitted !');
     console.log(`Full Name : ${this.state.full_name}`);
     console.log(`User Name : ${this.state.user_name}`);
     console.log(`Mobile Number : ${this.state.mobile_number}`);
     console.log(`E-Mail : ${this.state.e_mail}`);
     console.log(`Password : ${this.state.pass_word}`);

    this.setState({
      full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: '',
    })
  } **/

  /**constructor(props){
    super(props);
    this.state ={
      full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: '',
    }
  }

  getValueFunction = () => {
    const { full_name,user_name,mobile_number,e_mail,pass_word } = this.state;

    console.log('Form Submitted !');
    console.log(`Full Name : ${this.state.full_name}`);
    console.log(`User Name : ${this.state.user_name}`);
    console.log(`Mobile Number : ${this.state.mobile_number}`);
    console.log(`E-Mail : ${this.state.e_mail}`);
    console.log(`Password : ${this.state.pass_word}`);

     

    this.props.navigation.navigate('Homescreen1')

    
    
  }


  resetInput = () => {
    this.setState({
      full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: '',
    })

    const { full_name = '',user_name = '',mobile_number = '',e_mail = '',pass_word = '' } = this.setState;

    console.log('Form Resetted! !');
    console.log(`Full Name : ${this.state.full_name}`);
    console.log(`User Name : ${this.state.user_name}`);
    console.log(`Mobile Number : ${this.state.mobile_number}`);
    console.log(`E-Mail : ${this.state.e_mail}`);
    console.log(`Password : ${this.state.pass_word}`);

  }

  
  
combineFunction = () => {
  this.getValueFunction();
  this.resetInput();
} **/

constructor(props){
  super(props);
  this.state = {
    full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: ''
  }
}
submitAndClear = () => {
  this.setState({
    full_name: '',
       user_name: '',
       mobile_number: '',
       e_mail: '',
       pass_word: ''
  })

  /**const newUser = {
    full_name: this.state.full_name,
    user_name: this.state.user_name,
    mobile_number: this.state.mobile_number,
    e_mail: this.state.e_mail,
    pass_word: this.state.password
  }**/

  this.props.navigation.navigate('Loginscreen'); //Homescreen1
  console.log('Form Submitted !');
    console.log(`Full Name : ${this.state.full_name}`);
    console.log(`User Name : ${this.state.user_name}`);
    console.log(`Mobile Number : ${this.state.mobile_number}`);
    console.log(`E-Mail : ${this.state.e_mail}`);
    console.log(`Password : ${this.state.pass_word}`);

    

    axios.post('http://192.168.43.77:3000/api/createusers', {
      full_name: this.state.full_name,
    user_name: this.state.user_name,
    mobile_number: this.state.mobile_number,
    e_mail: this.state.e_mail,
    pass_word: this.state.pass_word
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  render() {
    return (
      <View style={styles.Regscreenmainview}> 
      <View style={{bottom: 10}}>
      <Text style={styles.RSlogo}>onbvn</Text>
      <Text style={styles.RSsublogo}>Register With onbvn</Text>
      <Text style={styles.RSsublogo}>To See Photos And Videos Of Your Friends</Text>
      </View>
      <View style={{bottom: 10}}>
           <TextInput 
           style={styles.LSInp1}
           placeholder={'Full Name'}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
           underlineColorAndroid='transparent'
           onChangeText={full_name => this.setState({full_name})}
           value={this.state.full_name}
           clearButtonMode = 'always'
           />
           <TextInput 
           style={styles.LSInp2}
           placeholder={'Username'}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
           underlineColorAndroid='transparent'
           onChangeText={user_name => this.setState({user_name})}
           value={this.state.user_name}
           clearButtonMode = 'always'
           />
           <TextInput 
           style={styles.LSInp2}
           placeholder={'Mobile Number'}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
           keyboardType='phone-pad'
           underlineColorAndroid='transparent'
           onChangeText={mobile_number => this.setState({mobile_number})}
           value={this.state.mobile_number}
           clearButtonMode = 'always'

           />
           <TextInput 
           style={styles.LSInp2}
           placeholder={'Email'}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
           keyboardType='email-address'
           underlineColorAndroid='transparent'
           onChangeText={e_mail => this.setState({e_mail})}
           value={this.state.e_mail}
           clearButtonMode = 'always'

           />
           <TextInput 
           style={styles.LSInp2}
           placeholder={'Password'}
           placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
           secureTextEntry
           underlineColorAndroid='transparent'
           onChangeText={pass_word => this.setState({pass_word})}
           value={this.state.pass_word}
           clearButtonMode = 'always'

           />
            <View style={{top: 10}}>
             <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}>By Signing Up, You Agree Our <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Terms</Text>,</Text>
             <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 15, fontFamily: 'montserratregular' }}><Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Data Policy</Text> & <Text style={{fontWeight: '900', fontSize: 15, fontFamily: 'montserratregular'}}>Cookies Policy</Text></Text>
             </View>
             <View style={{top: 20}}>
            {/*<GetStarted />*/}
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity title="Back" onPress={() => this.submitAndClear()} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-200, height: 45, justifyContent: 'center', borderRadius: 5}} >
            <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Get Started</Text>
            </TouchableOpacity>
            </View>
            </View>
           </View>
       </View>
    );
  }
}


class HomeScreen1 extends Component {
  static navigationOptions = ({navigation}) => {
    let headerTitle = 'Main';
    return { headerTitle }
}

  render() {
    return (
      <View style={styles.HS1mainview}>
      <Text style={{color:'#000000'}}>Home Screen1</Text>
      
    </View>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    let headerTitle = 'Main';
    let headerTitleStyle = { color: 'red' };
    return { headerTitle, headerTitleStyle }
}
  render() {
    return (

      
     
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
      
        <Header style={styles.HSheader}>
        <Right>
            <GoToChatScreen />
        </Right>
        <Body>
        <Title>onbvn</Title>
        </Body>
        <Left>
            <Icon size={20} color={'#fff'} name="comments" style={{left: 30}}/>
        </Left>
        </Header>
       
     
        <Content>
        <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
      <InnerHomeScreen imageSource="1" likes="101" />
      <InnerHomeScreen imageSource="2" likes="121" />
      <InnerHomeScreen imageSource="3" likes="131" />
      
        </Content>
      </Container>
      </StyleProvider>

    );
  }
}

class ProfileScreen extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
      
        <Header style={styles.HSheader}>
        <Right>
            <Icon size={20} color={'#fff'} name="bars" style={{position:'absolute', paddingRight:260,bottom:1}}/>
        </Right>
        <Body style={{position:'absolute',justifyContent:'center'}}>
        <Title>shubhamchepe</Title>
        </Body>
        <Left>
            <Icon size={20} color={'#fff'} name="comments" style={{position:'absolute', paddingLeft:80,bottom:1}}/>
        </Left>
        </Header>
       
     
        <Content>
        <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
      <InnerProfileScreen/>
      
        </Content>
      </Container>
      </StyleProvider>
    
    );
  }
}

class NotificationScreen extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
      
        <Header style={styles.HSheader}>
        <Right>
            <Icon size={20} color={'#fff'} name="ellipsis-v" style={{right: 130}}/>
        </Right>
        <Body>
        <Title>Notifications</Title>
        </Body>
        <Left>
            <Icon size={20} color={'#fff'} name="comments" style={{left: 30}}/>
        </Left>
        </Header>
       
     
        <Content>
        <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
      <InnerNotificationScreen />
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

class SearchScreen extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container style={styles.container}>
      
        <Header style={styles.HSheader}>
        
        <Body style={{position:'absolute',justifyContent:'center'}}>
        <Title>Search</Title>
        </Body>
        
        </Header>
       
     
        <Content>
        <StatusBar
      backgroundColor="#000000"
      barStyle="light-content"
    />
      
      <InnerSearchScreen />
      
        </Content>
      </Container>
      </StyleProvider>
    );
  }
}

class ChatScreen extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.137.1:3000/api/meetups')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.meetups,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.CSmainview}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.CSmainview}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}-----{item.description}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

class SplashToWelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'SplashScreen' }

    // Toggle the state every second
    setTimeout(() => (
      this.setState({ currentScreen: 'WelcomeScreens' })
    ), 2000);
  }

  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen/> : <WelcomeScreens/>
    return mainScreen
    }

  }

  const DashboardTabNavigator = createBottomTabNavigator(
    {
     Homescreen: {
       screen: HomeScreen,
       navigationOptions: {
         tabBarIcon: <Icon name="home" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
       }
     },
     Profilescreen: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="user" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
    Notificationscreen: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="exclamation-circle" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
    Searchscreen: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: <Icon name="search" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
      }
    },
  //  Chatscreen: {
   //   screen: ChatScreen,
    //  navigationOptions: {
    //    tabBarIcon: <Icon name="comments" size={25} color="#ffffff" style={{paddingRight: 20}}/>,
     // }
   // },
    },
    
    {
      
      animationEnabled: true,
      swipeEnabled: true, 
      tabBarOptions: "bottom",
      tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#ffffff',
      inactiveTintColor: '#696969',
      
      labelStyle: {
        fontSize: 12,
        fontFamily: 'montserratmedium',
        fontWeight: 'bold',
        color: '#ffffff',
        bottom: 5

      },
      
      
      style: {
        backgroundColor: '#000000',
      },
      
    },
    
  }
  );
  

  

const MainNavigator = createStackNavigator({
  Splashtowelcome: {
    screen: SplashToWelcomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Splashscreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Welcomescreens: {
    screen: WelcomeScreens,
    navigationOptions: {
      header: null
    }
  },
  Loginscreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Registerscreen: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  },
  Homescreen: {
    screen: HomeScreen,
    
  },
  Homescreen1: {
    screen: DashboardTabNavigator,
    navigationOptions: {
      header: null
    },
  },
  Chatscreen: {
    screen: ChatScreen,
    
  },
  
},
{
  headerMode: null,
});

const AppContainer = createAppContainer(MainNavigator);

const styles= StyleSheet.create({
mainview: {
flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#000000'
},
ws: {
  width: Dimensions.get('window').width,
height: Dimensions.get('window').height,
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
Regscreenmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#000000',
},
RSlogo: {
  fontFamily: 'montserrat-extrabold',
  fontSize: 35,
  textAlign: 'center',
  color: '#ffffff',
},
RSsublogo: {
  fontFamily: 'montserratregular',
  fontSize: 15,
  textAlign: 'center',
  justifyContent: 'center',
  color: '#ffffff'
},
HS1mainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
HSmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
NSmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
PSmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
SSmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
CSmainview: {
  flex:1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#ffffff'
},
container:{
  flex: 1,
  backgroundColor: '#ffffff'
},
HSheader:{
  ...Platform.select({
    android: {
        backgroundColor: '#000000',
        
    },
})
},
HSheaderstyle:{
  ...Platform.select({
    android: {
        flex:1,
    }
})
}

});
