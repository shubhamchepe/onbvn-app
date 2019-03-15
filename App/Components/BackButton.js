import React from 'react';
import { TouchableOpacity, Text, Dimensions,View } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackButton extends React.Component {
  render() {
    return <View style={{alignItems: 'center'}}><TouchableOpacity title="Back" onPress={() => { this.props.navigation.goBack() }} style={{backgroundColor: '#303030', width: Dimensions.get('window').width-200, height: 45, justifyContent: 'center'}} >
    <Text style={{fontSize: 18, fontWeight: 'normal', textAlign: 'center', justifyContent: 'center', color: '#ffffff'}}>Back</Text>
    </TouchableOpacity></View>;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);