import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
const Title = ({children , numberOfLines = 2 , size }) => {
  return (
      <Text numberOfLines={numberOfLines} style={[styles.titleText , size]} >
          {children}

      </Text>
  );
}
const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold', 
        fontSize:18,
        marginTop:5
    }
})
export default Title;
