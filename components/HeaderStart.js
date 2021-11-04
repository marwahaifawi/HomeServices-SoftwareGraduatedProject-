import React from "react";
import { View, Text , StyleSheet , Image } from "react-native";
import CardSquare from "./Cards/CardSquare";
const HeaderStart = () => {
  return (
    <>
      <CardSquare
        item= { {name: "Choose Maintenance Service", id: 11 }}
        desc="Then add your service information to get our worker list."
        FontFamily={{fontFamily:'FontThree'}}
        imagename={require('../assets/headImage.png')}
      
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
