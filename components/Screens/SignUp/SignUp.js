import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Button } from "react-native";
import { nameValidator } from "../../../helpers/nameValidator";
import Logo from "../Logo";
import TextInput from "../../Texts/TextInput";
import { theme } from "../../../core/theme";
import { emailValidator } from "../../../helpers/emailValidator";
import { passwordValidator } from "../../../helpers/passwordValidator";
import BackButton from '../../Buttons/BackButton';
import Title from "../../Texts/Title";

export default function SignUp({ navigation }) {
  const [userName, setName] = useState({ value: "", error: "" });
  const [emailAdd, setEmail] = useState({ value: "", error: "" });
  const [passwordFirst, setPassword] = useState({ value: "", error: "" });
  const onSignUpPressed = () => {
    const nameError = nameValidator(userName.value);
    const emailError = emailValidator(emailAdd.value);
    const passwordError = passwordValidator(passwordFirst.value);
    if (emailError || passwordError || nameError) {
      setName({ ...userName, error: nameError });
      setEmail({ ...emailAdd, error: emailError });
      setPassword({ ...passwordFirst, error: passwordError });
      return;
    }
    else {
        fetch("https://192.168.1.110:1321/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
         body: JSON.stringify({
            emailAdd: emailAdd,
            passwordFirst: passwordFirst,
            userName: userName,

          }),
        })
          .then((response) => response.json())
          .then((res) => {
            if (res.success === true) {
              alert(res.message);
              this.props.navigation.reset({
                //Using reset avoid you to go back to login Screen
                index: 0,
                routes: [
                  {
                    name: "HomePage",
                  /*  params: {
                      name: this.state.username,
                      weight: this.state.weight,
                      height: this.state.height,
                      gender: this.state.value,
                      age: this.state.age,
                      emailsign: this.state.emailsign,
                      firstname: this.state.firstname,
                      passwordsign: this.state.passwordsign,
                      lastname: this.state.lastname,
                      country: this.state.country,
                    },*/
                  },
                ],
              });
            } 
            else {
              alert(res.message);
              console.log(res);
              console.log("err")
            }
          })
          .done();
      };
    };

    return (
      <><View style={{ padding: 20, }}><BackButton goBack={() => navigation.navigate('HomePage')} /></View><View style={styles.container}>

        <Logo />
        <Title color={{ color: theme.colors.primary }} size={{ fontSize: 20 }} fontFamily={{ fontFamily: 'FontThree' }}>Create New Account</Title>
        <TextInput
          style={styles.textInput}
          label="Name"
          returnKeyType="next"
          value={userName.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!userName.error}
          errorText={userName.error}
          placeholder="Name" />
        <TextInput
          style={styles.textInput}
          label="Email"
          returnKeyType="next"
          value={emailAdd.value}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
          error={!!emailAdd.error}
          errorText={emailAdd.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholder="Email Address" />
        <TextInput
          style={styles.textInput}
          label="Password"
          returnKeyType="done"
          value={passwordFirst.value}
          onChangeText={(text) => setPassword({ value: text, error: "" })}
          error={!!passwordFirst.error}
          errorText={passwordFirst.error}
          placeholder="Password"
          secureTextEntry={true}
           />
        <View style={styles.button}>
          <Button
            onPress={onSignUpPressed}
            title={'Sign Up'}
            color={theme.colors.surface} /></View>

        <View style={styles.row}>
          <Text style={{ color: theme.colors.primary, fontFamily: 'FontThree' }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.replace("LogIn")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View></View></>


    );
  }

  const styles = StyleSheet.create({

    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,

    },
    textInput: {
      height: 50,
      width: '100%',
      paddingLeft: 10,
      fontSize: 17,
      fontFamily: 'FontTwo',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: theme.colors.primary

    },
    button: {
      backgroundColor: theme.colors.primary,
      fontFamily: 'FontThree',
      fontSize: 20,
      width: 100,
      borderRadius: 50,
      marginTop: 10

    },
    row: {
      flexDirection: 'row',
      marginTop: 20
    },
    link: {
      fontWeight: "bold",
      color: theme.colors.primary,
      fontFamily: 'FontTwo'
    },
  });
