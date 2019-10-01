import {StyleSheet, Dimensions} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:'#252525',
        flex:1,
        flexDirection: 'column',
    },
    Logocontainer:{
      alignItems:'center',
      marginTop: 30,  
    },
    logoText:{
        fontSize:28,
        color:'#fff',
        fontFamily: 'Montserrat-ExtraBold', 
      },
      subLogo:{
         fontSize:15,
         color:'#fff',
         fontFamily: 'Montserrat-ExtraLight', 
      },
      Inputcontainer:{
         flex:1,
         flexDirection:'column',
         marginTop:20,
         backgroundColor:'#252525',
         alignItems:'center',
         justifyContent:'flex-start'
      },
      LoginUserInput:{
        height:45,
        borderRadius:8,
        backgroundColor:'#393939',
        fontSize:20,
        paddingLeft:30,
        width:WIDTH-40,
        fontSize:14
      },
      LoginUserInput1:{
        height:45,
        borderRadius:8,
        backgroundColor:'#393939',
        fontSize:20,
        paddingLeft:30,
        marginTop:20,
        fontSize:14
      },
      TNCcontainer:{
        flexDirection:'column',
        backgroundColor:'#252525',
        marginTop: 20,
        alignItems:'center',
        width:WIDTH-40,
        
      },
      TNCfirstline:{
        fontSize:13,
        fontFamily:'Montserrat-Regular',
        color:'#fff'
      },
      TNCfirstlinelw:{
        fontSize:13,
        fontFamily:'Montserrat-Black',
        fontWeight: '500',
        color:'#fff'
      },
      TNCsecondline:{
        fontSize:13,
        fontFamily:'Montserrat-Black',
        fontWeight: '500',
        color:'#fff'
      },
      ButtonContainer:{
        flexDirection:'row',
        backgroundColor:'#252525',
        marginTop: 20,
        alignItems:'center',
        width:WIDTH-40,
        height:40,
        paddingLeft: 40,
        paddingRight: 40,
        justifyContent:'space-between'
      },
      btns:{
        backgroundColor:'#67e6dc',
        width:80,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      btnText:{
        fontFamily:'Montserrat-Regular',
        color:'#fff',
        fontWeight:'500'
      },
      modal:{
        width:WIDTH-50,
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:10
      },
      hideModal:{
        backgroundColor:'#67e6dc',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
        marginLeft:90,
        marginRight:90,
        height:28,
        borderRadius:8,
      },
      ModalTexth1:{
        textAlign:'center',
        color:'#fff',
        fontFamily:'Montserrat-Regular',
        fontWeight:'500',
        paddingTop:10
      },
      ModalTextp:{
        textAlign:'center',
        color:'#fff',
        marginLeft:20,
        marginRight:20,
        paddingTop: 10,
        fontFamily:'typerighter',
        fontSize:26,
        fontWeight:'100'
      },
      ModalDismissBtnPos:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        bottom:20
      }
});
