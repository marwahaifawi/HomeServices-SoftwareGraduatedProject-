import {StyleSheet} from 'react-native';
import {theme} from '../../../core/theme';

const Styles =
StyleSheet.create({
    forgotPassword: {
      width: '100%',
      marginBottom: 10,
      marginTop: 10,
      paddingLeft:7


    },
    button:{
      backgroundColor:theme.colors.primary,
      fontFamily:'FontThree', 
      fontSize:20,
      width:100,
      borderRadius:20, 
      marginTop:10,
     height:50,
     justifyContent: 'center',
     alignItems: 'center'
     
     },
    textInput:{
      fontSize: 17, 
      fontFamily:'FontTwo', 
      width:'90%'

    },
    textInput1:{
      height: 50,
      width: '100%',
      padding: 10,
      flexDirection:'row',
      justifyContent: 'space-between',
      borderRadius:10, 
      borderBottomWidth:1, 
      borderColor:theme.colors.primary,
      margin:10
  
    },
      
  container:{
   // justifyContent:'center', 
    alignItems:'center', 
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor:'white',
    borderRadius:20,
    width:"90%",
    height:"82%",
    alignSelf:'center',
    opacity:0.9,
    marginTop:110
   },
    row: {
      flexDirection: 'row',
      paddingTop:20,
      alignSelf: 'flex-start'
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.primary,
      fontFamily:'FontThree'
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
      fontFamily:'FontTwo',
      fontSize:15,
    },

  });
  export default Styles;