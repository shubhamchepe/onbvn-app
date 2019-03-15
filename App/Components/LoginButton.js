import React from 'react';
import { TouchableOpacity, Text, Dimensions,View } from 'react-native';
import { withNavigation } from 'react-navigation';

class LoginButton extends React.Component {
  render() {
    return <View style={{alignItems: 'center'}}><TouchableOpacity title="Back" onPress={() => { this.props.navigation.navigate('Homescreen1') }} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-200, height: 45, justifyContent: 'center', borderRadius: 5}} >
    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Log In</Text>
    </TouchableOpacity></View>;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(LoginButton);