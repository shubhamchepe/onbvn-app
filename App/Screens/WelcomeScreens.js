import React, {Component} from 'react';
import {ImageBackground, StatusBar, Platform, ScrollView, View, Image, StyleSheet, Dimensions} from 'react-native';
import welcomescreen1 from '../Images/welcomescreen1.png';
import welcomescreen2 from '../Images/welcomescreen2.png';
import GoToLoginScreenBtn from '../Components/GoToLoginScreenBtn';
const { width: WIDTH } = Dimensions.get('window')

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

  const styles = StyleSheet.create({
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
  })

export default WelcomeScreens;