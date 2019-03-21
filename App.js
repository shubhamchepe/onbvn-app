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
import SplashScreen from './App/Screens/SplashScreen';
import WelcomeScreens from './App/Screens/WelcomeScreens';
import LoginScreen from './App/Screens/LoginScreen';
import RegisterScreen from './App/Screens/RegisterScreen';
import HomeScreen1 from './App/Screens/HomeScreen1';
import HomeScreen from './App/Screens/HomeScreen';


const { width: WIDTH } = Dimensions.get('window')

export default class App extends Component {
  render() {
    
    return (
       <Root>
      <AppContainer>
      <SplashScreen />
      <WelcomeScreens />
      <LoginScreen />
      <RegisterScreen />
      <HomeScreen1 />
      <HomeScreen />
      </AppContainer>
      </Root>

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
