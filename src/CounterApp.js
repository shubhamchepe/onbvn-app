import React, { Component } from 'react';
import { View, Text,StyleSheet,ActivityIndicator,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import {connect} from 'react-redux';

class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded:false
        };
      }
    
      async componentDidMount(){
        await Font.loadAsync({
          'Montserrat-Black': require('../assets/fonts/Montserrat-Black.ttf'),
          'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
          'Montserrat-ExtraLight': require('../assets/fonts/Montserrat-ExtraLight.ttf')
    
        });
        this.setState({fontLoaded:true})
      }


  render() {
    return (
      <View style={styles.container}>
           {this.state.fontLoaded == true ?(
        <View style={styles.container}>
          <View style={{flexDirection:'row',width:250,justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => this.props.DecreaseCounter()}>
              <Text style={{fontSize:20}}>DECREASE</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>{this.props.counter}</Text>
            <TouchableOpacity onPress={() => this.props.IncreaseCounter()}>
              <Text style={{fontSize:20}}>INCREASE</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        ) : (<ActivityIndicator style={styles.container} size="small" color="#67e6dc" />)
    }
      </View>
    );
  }
}

function mapStateToProps(state){
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        IncreaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        DecreaseCounter : () => dispatch({type:'DECREASE_COUNTER'})
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#252525',
        flexDirection: 'column'
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterApp)