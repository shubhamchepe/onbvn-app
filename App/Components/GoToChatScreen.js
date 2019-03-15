import React from 'react';
import { TouchableOpacity, Text, Dimensions,View } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


class GoToChatScreen extends React.Component {
  render() {
    return <View style={{}}><TouchableOpacity title="Back" onPress={() => { this.props.navigation.navigate('Chatscreen') }} style={{right: 130}} >
    <Icon size={20} color={'#fff'} name="comment" style={{}}/>
    </TouchableOpacity></View>;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(GoToChatScreen);