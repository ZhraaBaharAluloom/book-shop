import React from "react";
import { observer } from "mobx-react";

//Styles
import { BookDetailStyled } from "./styles";

//stores
import bookStore from "../../stores/bookStore";
import { Thumbnail, Text, Content, Card } from "native-base";
import { Header } from "react-native/Libraries/NewAppScreen";

const BookDetail = ({ route }) => {
  const { book } = route.params;

  return (
    <Content style={{ margin: "15%", borderRadius: "30%" }}>
      <Card
        style={{
          padding: "6%",
          borderColor: "#723d46",
          borderStyle: "dotted",
        }}
      >
        <Thumbnail square source={book.image} />
        <Text>Price: {book.price} $</Text>
        <Text>Author: {book.author} .</Text>
        <Text>Released: {book.released} . </Text>
        <Text>Genre: {book.genre} .</Text>
        <Text>Summary: {book.description} .</Text>
      </Card>
    </Content>
  );
};

export default observer(BookDetail);
