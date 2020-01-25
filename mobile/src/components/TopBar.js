import React from "react";
import { Header, Left, Body, Right,  Title,  } from "native-base";

const TopBar = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Contact list</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default TopBar;
