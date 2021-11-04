import { StyleSheet } from "react-native";
import { theme } from "../../core/theme";
const Styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonStyled: {
    backgroundColor: theme.colors.primary,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    borderColor: theme.colors.primary,
    borderWidth: 3,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily:'FontTwo',
    color: "white",
  },
});
export default Styles;
