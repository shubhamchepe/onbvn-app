import React, { Component } from 'react';
import { View, Text,AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';


class LeftDrawerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
        <Icon name='md-bookmark' style={{fontSize: 30, color: 'white'}} />
    );
  }
}

export default LeftDrawerIcon;
