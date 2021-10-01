import { StyleSheet } from "react-native";
import { theme } from '../../../core/theme';
const Styles = StyleSheet.create({
    container:{
  alignItems:'center',
backgroundColor:'red',
flex: 1,
width: '100%',
marginTop:50
    },
    text:{
        fontSize:100,
        color:theme.colors.primary,
    }
});
export default Styles;