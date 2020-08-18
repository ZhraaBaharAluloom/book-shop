import React from "react";

import { HomeBackground, HomeStyling, Title, ButtonStyled } from "./styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://i1.pickpik.com/photos/916/460/15/dark-gloomy-books-pages-preview.jpg",
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
