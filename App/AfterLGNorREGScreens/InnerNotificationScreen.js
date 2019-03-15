import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title, Tabs, Tab, List, ListItem } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';


class InnerNotificationScreen extends React.Component {
    render() {
      return (
         <Content> 
           <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={UserProfileThumbnail} />
              </Left>
              <Body>
                <Text>Username</Text>
                <Text note numberOfLines={1}>Has Posted A New Post</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={UserProfileThumbnail} />
              </Left>
              <Body>
                <Text>Username</Text>
                <Text note numberOfLines={1}>Has Liked Your Post</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={UserProfileThumbnail} />
              </Left>
              <Body>
                <Text>Username</Text>
                <Text note numberOfLines={1}>Has Commented On Your Post</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={UserProfileThumbnail} />
              </Left>
              <Body>
                <Text>Username</Text>
                <Text note numberOfLines={1}>Has Shared Your Post</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
  
  })

  export default InnerNotificationScreen;