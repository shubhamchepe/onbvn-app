import React from 'react';
import { TouchableOpacity, Text, Dimensions,View } from 'react-native';
import { withNavigation } from 'react-navigation';

class ForgotPass extends React.Component {
  render() {
    return <View style={{alignItems: 'center'}}><TouchableOpacity title="Back" onPress={() => { this.props.navigation.goBack() }} style={{ width: Dimensions.get('window').width-100, justifyContent: 'center'}} >
    <Text style={{fontSize: 15, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff', marginTop: 5}}>Forgot Password ? Get Help</Text>
    </TouchableOpacity></View>;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(ForgotPass);