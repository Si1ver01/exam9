import React from "react";
import {
  Body,
  Button,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail
} from "native-base";

const ContactItem = ({ contact, modalHandler }) => {
  return (
    <ListItem thumbnail onPress={modalHandler}>
      <Left>
        <Thumbnail square source={{ uri: contact.photo }} />
      </Left>
      <Body>
        <Text>{contact.name}</Text>
        <Text note numberOfLines={1}>
          email : {contact.email}
        </Text>
      </Body>
      <Right>
        <Button iconRight onPress={modalHandler}>
          <Text>View</Text>
          <Icon name="arrow-forward" />
        </Button>
      </Right>
    </ListItem>
  );
};

export default ContactItem;
