import React from "react";
import Modal from "react-native-modal";
import { TouchableWithoutFeedback, Image, View} from "react-native";
import { Content, Card, CardItem, Text, Button, Body } from "native-base";

const Modalka = ({ status, modalHandler, contact }) => {
  return (
    <Modal
      isVisible={status}
      customBackdrop={
        <TouchableWithoutFeedback onPress={modalHandler}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      }
    >
      <Content>
        <Card>
          <Body>
            <Text>{contact.name}</Text>
            <Text note>email : {contact.email}</Text>
            <Text note>phone : {contact.phone}</Text>
          </Body>
          <CardItem cardBody>
            <Image
              source={{ uri: contact.photo }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <Button block success onPress={modalHandler}>
            <Text>Close</Text>
          </Button>
        </Card>
      </Content>
    </Modal>
  );
};

export default Modalka;
