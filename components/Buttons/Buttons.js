import * as React from "react";
import { View, Pressable, Text } from "react-native";
import { theme } from "../../core/theme";
import Styles from "./ButtonsStyle";
const ButtonItem = (props) => {
  const { content, OnPress } = props;
  const backgroundColor = content === "Skip" ? "#ffffff" : theme.colors.primary;
  const textColor = content === "Skip" ? theme.colors.primary : "#ffffff";
  return (
    <View styles={Styles.container}>
      <Pressable
        style={[Styles.buttonStyled, { backgroundColor: backgroundColor }]}
        onPress={() => OnPress()}
      >
        <Text style={[Styles.buttonText, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default ButtonItem;
