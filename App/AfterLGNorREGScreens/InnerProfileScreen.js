import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title, Tabs, Tab } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileScreenAbout from './ProfileScreenAbout';
import ProfileScreenPhotos from './ProfileScreenPhotos';

class InnerProfileScreen extends React.Component {
    render() {
      return (
         <Content> 
             <View>
            <View style={{flex:1,backgroundColor:'grey',zIndex:-1,height:250}}>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:50}}>
                   <View style={{flex:1}}>
                       <Image source={UserProfileThumbnail} style={{width:80,height:80,borderRadius:40}}/>
                       </View>
                       <View style={{marginTop:85}}>
                       <Text style={{color:'#ffffff',textAlign:'center',fontSize:16,fontWeight:'600'}}>Username</Text>
                       </View> 
                       <View>
                       <Text style={{color:'#ffffff',textAlign:'center',fontSize:12,fontWeight:'400'}}>UX/UI Designer | Frontend Developer</Text>
                       </View>
                       <View>
                       <Text style={{color:'#ffffff',textAlign:'center',fontSize:12,fontWeight:'400'}}>Nagpur, India.</Text>
                       </View>                    
                   
                   </View>
                   </View>
                   <View style={{flex:3, backgroundColor:'#f0f0f0',borderRadius:3,justifyContent:'center',alignContent:'center',marginLeft:20,marginRight:20,marginTop:-40,height:70,zIndex:1}}>
                   <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                   <View>
                       <Text style={{fontSize:22,color:'#000000',textAlign:'center',fontWeight:'900'}}>9</Text>
                       <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>Posts</Text>
                       </View>
                       <View>
                       <Text style={{fontSize:22,color:'#000000',textAlign:'center',fontWeight:'900'}}>2817</Text>
                       <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>Followers</Text>
                       </View>
                       <View>
                       <Text style={{fontSize:22,color:'#000000',textAlign:'center',fontWeight:'900'}}>20</Text>
                       <Text style={{fontSize:13,color:'grey',fontWeight:'600'}}>Following</Text>
                       </View>
                       </View>
                   </View>
                    {/*<View style={{flex:1,justifyContent:'center',alignItems:'center',zIndex:-1,marginTop:10}}>
                    <View>
                    <Button dark style={{flex:1,width:110,height:30,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'#ffffff',fontSize:15,fontWeight:'400'}}>Edit Profile</Text>
                      <Icon name="edit" color="#ffffff" size={18} style={{paddingLeft:7}}/>
                    </Button>
                    </View>
      </View>*/}
                    <View style={{marginTop:10}}>
                    
        <Tabs tabStyle={{backgroundColor: '#000000'}}>
          <Tab heading="About" tabStyle={{backgroundColor: '#000000'}} activeTabStyle={{backgroundColor: '#000000'}}>
            <ProfileScreenAbout />
          </Tab>
          <Tab heading="Posts" tabStyle={{backgroundColor: '#000000'}} activeTabStyle={{backgroundColor: '#000000'}}>
            <ProfileScreenPhotos />
          </Tab>
        </Tabs>
                    </View>
                    </View>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
  
  })

  export default InnerProfileScreen;