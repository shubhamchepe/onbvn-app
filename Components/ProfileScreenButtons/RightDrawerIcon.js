import React, { Component } from 'react';
import { View, Text,AsyncStorage } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import { Ionicons } from '@expo/vector-icons';


class RightDrawerIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
        <Icon name='md-list' style={{fontSize: 30, color: 'white'}} />
    );
  }
}

export default RightDrawerIcon;
