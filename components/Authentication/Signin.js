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
import { Text } from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // if (authStore.signin) navigation.navigate("Home");
  const handleSubmit = () => {
    authStore.signin(user);
    if (authStore.signin) navigation.goBack();
  };

  return (
    <AuthContainer>
      <AuthTitle> Sign in</AuthTitle>
      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
        placeholderTextColor="#A6AEC1"
        autoCapitalize="none"
      />
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        placeholder="Password"
        placeholderTextColor="#A6AEC1"
        secureTextEntry={true}
      />
      <AuthButton onPress={handleSubmit}>
        <AuthButtonText>Sign in</AuthButtonText>
      </AuthButton>
      <AuthOther onPress={() => navigation.navigate("Sign up")}>
        New customer?
      </AuthOther>
    </AuthContainer>
  );
};

export default observer(Signin);
