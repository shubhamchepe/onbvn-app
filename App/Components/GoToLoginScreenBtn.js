import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class GoToLoginScreenBtn extends React.Component {
  render() {
    return <TouchableOpacity
    style={{
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:100,
        marginBottom: 100,
        marginLeft: 300
      }}
      onPress={() => { this.props.navigation.navigate('Loginscreen') }}>
    <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', justifyContent: 'center', color: '#000000'}}>></Text>
  </TouchableOpacity>;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(GoToLoginScreenBtn);