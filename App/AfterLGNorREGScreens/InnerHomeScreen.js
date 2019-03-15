import React,{ Component } from 'react';
import { TouchableOpacity, Text, Image, Dimensions,View, StyleSheet, ListView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button, Header, Title } from 'native-base';
import UserProfileThumbnail from '../Images/user.png';
import Icon from 'react-native-vector-icons/FontAwesome';

class InnerHomeScreen extends React.Component {
    render() {
        const images = {
            "1": require('../Images/post1.jpg'),
            "2": require('../Images/post2.jpg'),
            "3": require('../Images/post3.jpg'),
        }
      return (
       
        
     
         <Content> 
         <View style={styles.IHSmainview}>
        <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0)',borderBottomColor:'#ffffff', flex:0}}>  
           <CardItem> 
            <Left>
                <Thumbnail source={UserProfileThumbnail}>

                </Thumbnail>
                <Body> 
                  <Text> Shubham Chepe </Text>
                  <Text note> Nagpur. </Text>
                </Body>
            </Left>
            </CardItem>
            <CardItem cardBody style={{paddingLeft:5,paddingRight:5,borderRadius: 8}}> 
               <Image source={images[this.props.imageSource]} style={{height:300,width:null,flex:1,borderRadius: 8}}/>
            </CardItem>
            <CardItem style={{justifyContent: 'center', alignItems: 'center', height: 40}}> 
                <Body> 
                  <Text> These Are Few Lines For Image Caption </Text>
                </Body>
            </CardItem>
            <CardItem style={{justifyContent: 'center', alignItems: 'center', height: 40}}>
               
                   <TouchableOpacity><Icon name="share" size={25} color="#000000"/></TouchableOpacity>  
                   <TouchableOpacity><Icon name="heart" size={25} color="#000000" style={{marginLeft: 50, marginRight: 50}}/></TouchableOpacity>  
                   <TouchableOpacity><Icon name="comment" size={25} color="#000000"/></TouchableOpacity>                
                    
            </CardItem>   
            <CardItem style={{justifyContent: 'center', alignItems: 'center', height: 40}}>
               <Text style={styles.item}>56 Shares</Text>
               <Text style={styles.item}>{this.props.likes}</Text>
               <Text style={styles.item}>43 Comments</Text>
            </CardItem>
            <CardItem style={{justifyContent: 'center', alignItems: 'center'}}> 
                <Body> 
                  <Text> You Will See People Comments Here, You Will See People Comments Here
                  You Will See People Comments HereYou Will See People Comments Here </Text>
                </Body>
            </CardItem>
        </Card>
      </View>
         </Content>
      );
    }
  }

  const styles = StyleSheet.create({
    IHSmainview: {
        flex:1,
      
      },
      container: {
          flex:1,
          backgroundColor: '#ffffff',
      },
    item: {
        margin: 3,
        width: 100,
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        fontFamily: 'montserratregular',
        fontWeight: 'bold',
        fontSize: 15
    }
  })

  export default InnerHomeScreen;