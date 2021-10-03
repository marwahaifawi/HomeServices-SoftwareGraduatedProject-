

import {StyleSheet , Dimensions} from 'react-native';
import { theme } from '../../../core/theme';
const Styles = StyleSheet.create({
startPage: {
    flex: 1,
  },
  buttonsView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent:'space-between',
       flex:1,
  },
  buttonOne: {
    height: 44,
    marginRight:30,
    justifyContent:'center',   
    alignItems:'center',
    width: 140,
    borderRadius:6,
    borderColor:theme.colors.primary,
    borderWidth:3
  },
    buttonTwo: {
    height: 44,
    width: 140,
    justifyContent:'center',   
    alignItems:'center',
    borderRadius:6,
    borderColor:theme.colors.primary,
    borderWidth:3
  },
  imageLogo: {
    flex:4,
    width: 297, 
    height: 411,
    alignSelf: "center"
  },
  textButtonOne:{
    fontSize:20,
    color:'#e0a910',
    fontWeight:"500",
  },
  textButtonTwo:{
    fontSize:20,
    fontWeight:"500",
    color:'#e0a910'
  },
});
export default Styles;