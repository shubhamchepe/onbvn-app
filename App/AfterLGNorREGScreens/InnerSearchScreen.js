import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView, TextInput } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title, Tabs, Tab, List, ListItem } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width: WIDTH } = Dimensions.get('window')

class InnerSearchScreen extends React.Component {
    render() {
      return (
         <Content> 
           <View style={{marginTop:20}}>
           <TextInput 
           style={styles.SSInp}
           placeholder={'Search'}
           placeholderTextColor={'#808080'}
           underlineColorAndroid='transparent'
           />
           </View>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
    SSInp: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 9,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(128, 128, 128, 0.4)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25,
        justifyContent: 'space-between',
        marginBottom: 15
      },
  })

  export default InnerSearchScreen;