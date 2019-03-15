import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title, Tabs, Tab } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';
var {width,height} = Dimensions.get('window')

var images = [
    require('../Images/posts/post1.jpg'),
    require('../Images/posts/post2.jpg'),
    require('../Images/posts/post3.jpg'),
    require('../Images/posts/post4.jpg'),
    require('../Images/posts/post5.jpg'),
    require('../Images/posts/post6.jpg'),
    require('../Images/posts/post7.jpg'),
    require('../Images/posts/post8.jpg'),
    require('../Images/posts/post9.jpg'),
]

renderPosts = () => {
    return images.map((image,index) => {
        return(
            <View key={index} style={[ {width:(width)/3},{height:(width)/3},{marginBottom:2}, index % 3 !==0 ? {padding:2} : {paddingLeft:0} ]}>
                <Image source={image} style={{flex:1,width:undefined,height:undefined}}/>
            </View>
        )
    })
}

renderSection = () => {
    return (
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
          {renderPosts()}
        </View>
    )
}

class ProfileScreenPhotos extends React.Component {
    render() {
      return (
         <Content> 
              <View>{renderSection()}</View>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
  
  })

  export default ProfileScreenPhotos;