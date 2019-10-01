import {StyleSheet, Dimensions} from 'react-native';
const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
import {widthPercentageToDP,heightPercentageToDP} from './ResponsiveFormula';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  contentContainer:{
     paddingVertical: heightPercentageToDP('2%')
  },
    maincontainer:{
     flex:1,
     flexDirection:'column',
     alignItems: 'center',
     backgroundColor:'#252525',
     width:widthPercentageToDP('100%'),
     height:heightPercentageToDP('100%')  
    },
    container:{
        backgroundColor:'#252525',
        flex:1,
        flexDirection: 'column'
    },
    logoContainer:{
        flex:1,
        flexDirection:'column',
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP('10%'),
        backgroundColor:'#252525',//change colour to debug
        alignItems:'center',
        marginTop:heightPercentageToDP('1%'),
        paddingTop:heightPercentageToDP('2%')
    },
    logoText:{
        fontSize:RFValue(25),
        color:'#fff',
        fontFamily: 'Montserrat-ExtraBold',
        textAlign:'center',
        alignItems:'center'  
    },
    subLogo:{
        fontSize:RFValue(15),
         color:'#fff',
         fontFamily: 'Montserrat-ExtraLight', 
         textAlign:'center',
         alignItems:'center'
    },
    inputContainer:{
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP('60%'),
        backgroundColor:'#252525',//change colour to debug
        alignItems:'center',
        marginTop:heightPercentageToDP('1%'),
        paddingTop: heightPercentageToDP('2%'),
        bottom:heightPercentageToDP('2%')
    },
    LoginUserInput:{
        height:heightPercentageToDP('7%'),
        borderRadius:8,
        backgroundColor:'#393939',
        fontSize:RFValue(16),
        paddingLeft:30,
        width:widthPercentageToDP('90%'),
      },
      LoginUserInput1:{
        height:heightPercentageToDP('7%'),
        width:widthPercentageToDP('90%'),
        borderRadius:8,
        backgroundColor:'#393939',
        color: '#fff',
        fontSize:RFValue(16),
        paddingLeft:30,
        marginTop:heightPercentageToDP('2%'),
      },
      FirstName:{
        height:heightPercentageToDP('7%'),
        width:widthPercentageToDP('43%'),
        borderRadius:8,
        backgroundColor:'#393939',
        color: '#fff',
        fontSize:RFValue(16),
        paddingLeft:30,
        marginTop:heightPercentageToDP('2%'),
        marginRight:heightPercentageToDP('1%')
      },
      LastName:{
        height:heightPercentageToDP('7%'),
        width:widthPercentageToDP('43%'),
        borderRadius:8,
        backgroundColor:'#393939',
        color: '#fff',
        fontSize:RFValue(16),
        paddingLeft:30,
        marginTop:heightPercentageToDP('2%'),
        marginLeft:heightPercentageToDP('1%')
      },
      
    infoContainer:{
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP('10%'),
        backgroundColor:'#252525',//change colour to debug
        alignItems:'center',
        marginTop:heightPercentageToDP('-2%'),
        paddingTop:heightPercentageToDP('2%')  
    },
    TNCfirstline:{
        fontSize:RFValue(15),
        fontFamily:'Montserrat-Regular',
        color:'#fff',
        textAlign:'center'
      },
      TNCfirstlinelw:{
        fontSize:RFValue(15),
        fontFamily:'Montserrat-Black',
        fontWeight: '500',
        color:'#fff',
        textAlign:'center'
      },
      TNCsecondline:{
        fontSize:RFValue(15),
        fontFamily:'Montserrat-Black',
        fontWeight: '500',
        color:'#fff',
        textAlign:'center'
      },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:widthPercentageToDP('90%'),
        height:heightPercentageToDP('10%'),
        backgroundColor:'#252525',//change colour to debug
        alignItems:'center',
        marginTop:heightPercentageToDP('1%'),
        bottom: heightPercentageToDP('1%')
    },
    btns:{
        backgroundColor:'#67e6dc',
        width:widthPercentageToDP('20%'),
        height:heightPercentageToDP('6.5%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      btnText:{
        fontFamily:'Montserrat-Regular',
        color:'#fff',
        fontWeight:'500',
        fontSize:RFValue(16)
      },
    // Modal Part
    modal:{
        width:widthPercentageToDP('90%'),
        alignItems:'center',
        borderRadius:10
      },
      hideModal:{
        backgroundColor:'#67e6dc',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop: heightPercentageToDP('5%'),
        marginLeft:widthPercentageToDP('25%'),
        marginRight:widthPercentageToDP('25%'),
        height:heightPercentageToDP('5%'),
        borderRadius:8,
      },
      ModalTexth1:{
        alignItems:'center',
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
