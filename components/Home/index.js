import React from "react";

import { HomeBackground, HomeStyling, Title, ButtonStyled } from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://images.creativemarket.com/0.1.0/ps/4949375/1820/2403/m1/fpnw/wm1/zjgmjziyz7egrrmk4sdijbyfhglrvletsblcr8eer5gueqcscjhylnrf9ziqoraj-.jpg?1535129149&s=43cf3db502ce55f1397194e932e74fff",
      }}
    >
      <HomeStyling>
        <Title>BOOKS & BOOKS</Title>
        <ButtonStyled onPress={() => navigation.navigate("Vendors")}>
          Bookshop{" "}
        </ButtonStyled>
      </HomeStyling>
    </HomeBackground>
  );
};
export default Home;
