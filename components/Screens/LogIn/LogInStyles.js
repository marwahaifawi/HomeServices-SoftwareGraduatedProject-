import {StyleSheet} from 'react-native';
import {theme} from '../../../core/theme';
const Styles =
StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 10,
    },
    button:{
      backgroundColor:theme.colors.primary,
      fontFamily:'FontThree', 
      fontSize:20,
      width:100,
      borderRadius:50, 
      marginTop:10,
     width:100,
     height:40,
     justifyContent: 'center',
     alignItems: 'center'
     
     },
    textInput:{
      height: 50,
      width: '100%',
      paddingLeft: 10,
      fontSize: 17, 
      fontFamily:'FontTwo', 
      borderRadius:50, 
      borderWidth:1, 
      borderColor:theme.colors.primary,
      margin:10
  
    },
      
  container:{
    justifyContent:'center', 
    alignItems:'center', 
    padding: 50,
    backgroundColor:'white'
   },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 15,
      color: theme.colors.primary,
      fontFamily:'FontTwo'
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
      fontFamily:'FontTwo',
      fontSize:16,
      marginTop:5
    },
    texts:{
      fontSize: 15,
      color: theme.colors.primary,
      marginTop:5
    },
  });
  export default Styles;