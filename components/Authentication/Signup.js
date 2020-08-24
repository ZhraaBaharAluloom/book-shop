import React, { useState } from "react";

// Styles
import {
  AuthContainer,
  AuthTitle,
  AuthTextInput,
  AuthButton,
  AuthButtonText,
  AuthOther,
} from "./styles";

import { observer } from "mobx-react";

// Stires
import authStore from "../../stores/authStore";
import { NavigationContainer } from "@react-navigation/native";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    console.log("handleSubmit -> user", user);
    if (authStore.user) navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle> Sign up</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(firstName) => setUser({ ...user, firstName })}
        placeholder="First Name"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(lastName) => setUser({ ...user, lastName })}
        placeholder="Last Name"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(email) => setUser({ ...user, email })}
        placeholder="E-mail"
        placeholderTextColor="#A6AEC1"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign up</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Sign in")}>
        {" "}
        Already have an account{" "}
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signup);
