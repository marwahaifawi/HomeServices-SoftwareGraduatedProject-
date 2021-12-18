import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { theme } from '../../core/theme';
import * as Animatable from 'react-native-animatable';
const Title = ({children , numberOfLines = 2 , size , fontFamily , color , marginTop}) => {
  return (
      <Animatable.Text animation="zoomInUp" numberOfLines={numberOfLines} style={[styles.titleText , size , fontFamily , color , marginTop]} >
          {children}
      </Animatable.Text>
  );
}
const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold', 
        fontSize:20,
        fontFamily:'FontOne',
        color:theme.colors.primary
    }
})
export default Title;
