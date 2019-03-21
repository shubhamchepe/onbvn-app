import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform} from 'react-native';
import splashImage from '../Images/splashscreen.png';

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

  export default SplashScreen;