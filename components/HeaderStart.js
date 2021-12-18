import React from "react";
import { View, Text , StyleSheet , Image, TouchableOpacity} from "react-native";
import CardSquare from "./Cards/CardSquare";
import AboutUs from '../components/Screens/AboutUs/AboutUs';
const HeaderStart = ({navigation , OnPress}) => {
  return (
    <>
  
      <CardSquare
        item= { {name: "Choose Maintenance Service" }}
        desc="Then add your service information to get our worker list."
        FontFamily={{fontFamily:'FontThree'}}
        imagename={require('../assets/headImage.png')}
       OnPress={OnPress}
      />
      
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#ffff",
    marginTop: 10,
  },
  HeadImage: {
    width: "100%",
    height: 150,
  },
  contentContainer: {
    padding: 5,
  },
});

export default HeaderStart;
