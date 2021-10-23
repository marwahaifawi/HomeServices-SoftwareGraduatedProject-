import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import { theme } from '../../core/theme';
const Title = ({children , numberOfLines = 2 , size , fontFamily , color}) => {
  return (
      <Text numberOfLines={numberOfLines} style={[styles.titleText , size , fontFamily , color]} >
          {children}

      </Text>
  );
}
const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold', 
        fontSize:18,
        marginTop:5,
        fontFamily:'FontOne',
        color:theme.colors.primary

    }
})
export default Title;
