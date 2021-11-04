import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { theme } from '../../core/theme';
import * as Animatable from 'react-native-animatable';
const Title = ({children , numberOfLines = 2 , size , fontFamily , color}) => {
  return (
      <Animatable.Text animation="zoomInUp" numberOfLines={numberOfLines} style={[styles.titleText , size , fontFamily , color]} >
          {children}

      </Animatable.Text>
  );
}
const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold', 
        fontSize:20,
        marginTop:5,
        fontFamily:'FontOne',
        color:theme.colors.primary
    }
})
export default Title;
