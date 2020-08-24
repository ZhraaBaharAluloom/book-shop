import React from "react";

// Styles
import {
  HomeBackground,
  HomeStyling,
  Title,
  ButtonStyled,
  SigninHomeStyled,
  WelcomeStyled,
} from "./styles";

//Stores
import authStore from "../../stores/authStore";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  // let user = authStore.user;
  return (
    <HomeBackground
      source={{
        uri:
          "https://images.creativemarket.com/0.1.0/ps/4949375/1820/2403/m1/fpnw/wm1/zjgmjziyz7egrrmk4sdijbyfhglrvletsblcr8eer5gueqcscjhylnrf9ziqoraj-.jpg?1535129149&s=43cf3db502ce55f1397194e932e74fff",
      }}
    >
      <HomeStyling>
        <Title>BOOKS & BOOKS</Title>

        <WelcomeStyled onPress={() => navigation.navigate("Vendors")}>
          {authStore.user
            ? `Hello, ${authStore.user.username}. Welcome To The Books World ! `
            : ""}
        </WelcomeStyled>

        {/* <SigninHomeStyled onPress={() => navigation.navigate("Sign in")}> */}
        <SigninHomeStyled
          onPress={
            authStore.user
              ? authStore.signout
              : () => navigation.navigate("Sign in")
          }
        >
          {authStore.user ? "Sign out" : "Sign in"}
        </SigninHomeStyled>
      </HomeStyling>
    </HomeBackground>
  );
};
export default observer(Home);
