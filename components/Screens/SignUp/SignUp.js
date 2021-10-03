import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { nameValidator } from "../../../helpers/nameValidator";
import Background from "../../Background";
import Logo from "../../Logo";
import Header from "../../Header";
import ButtonItem from "../../Buttons/Buttons";
import TextInput from "../../TextInput";
import BackButton from "../../BackButton";
import { theme } from "../../../core/theme";
import { emailValidator } from "../../../helpers/emailValidator";
import { passwordValidator } from "../../../helpers/passwordValidator";

export default function SignUp({ navigation }) {
  const [firstname, setfirstName] = useState({ value: "", error: "" });
  const [secondname, setsecondName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onSignUpPressed = () => {
    const nameError = nameValidator(firstname.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setfirstName({ ...firstname, error: nameError });
      setsecondName({ ...secondname, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "MainPage" }],
    });
  };

  return (
    <Background>
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="FirstName"
        returnKeyType="next"
        value={firstname.value}
        onChangeText={(text) => setfirstName({ value: text, error: "" })}
        error={!!firstname.error}
        errorText={firstname.error}
        placeholder="First Name"
      />
      <TextInput
        label="SecName"
        returnKeyType="next"
        value={secondname.value}
        onChangeText={(text) => setsecondName({ value: text, error: "" })}
        error={!!secondname.error}
        errorText={secondname.error}
        placeholder="Second Name"
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        placeholder="Email Address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        placeholder="Password"
        secureTextEntry
      />
      <ButtonItem content="Sign Up" OnPress={onSignUpPressed} />
      <View style={styles.row}>
        <Text style={{ color: theme.colors.primary }}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.replace("LogIn")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
