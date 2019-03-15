import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title, Tabs, Tab } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';

class ProfileScreenAbout extends React.Component {
    render() {
      return (
         <Content> 
              <Card>
              <CardItem header>
              <Text>About Me</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </Body>
            </CardItem>
          </Card>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
  
  })

  export default ProfileScreenAbout;