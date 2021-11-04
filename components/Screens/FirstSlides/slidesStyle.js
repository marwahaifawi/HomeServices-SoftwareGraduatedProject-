import {StyleSheet , Dimensions} from 'react-native';
const Styles = StyleSheet.create({
        container:{
            flex:1,
            width:Dimensions.get('window').width ,
            height:Dimensions.get('window').height,
            backgroundColor:'white'
          },
          slideImage:{
            width:'100%',
            resizeMode:'contain',
            height:'50%',
            marginTop:'20%',
            flex:3
          },
          title:{
           fontSize:20,
           marginTop:20,
           alignSelf:'center',
           fontWeight:'bold',
           fontFamily:'FontThree',
           color:'#447493'

          },
          subTitle:{
            fontSize:17,
            marginTop:15,
            alignSelf:'center',
            fontFamily:'FontTwo',
            color:'#447493'
          },
          buttonsView:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center'
          },
          textsView:{
            flex:1
          }
});
export default Styles;