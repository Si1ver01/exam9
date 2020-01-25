import React from "react";
import { Content, List, Spinner } from "native-base";
import useFetch from "../hooks/useFetch";
import ContactItem from "./ContactItem";
import Modalka from "./Modalka";

const ContactList = () => {
  const [{ response }, doFetch] = useFetch();
  const [isShowModal, setIsShowModal] = React.useState(false);
  const [contact, setContact] = React.useState(true);

  React.useEffect(() => {
    if (!response) {
      doFetch("https://ddanshin-af25f.firebaseio.com/contacts.json");
    }
  }, [doFetch]);

  if (!response) {
    return (
      <Content>
        <Spinner color="blue" />
      </Content>
    );
  }

  const showModal = id => {
    const index = response.findIndex(el => el.id === id);
    setContact(response[index]);
    setIsShowModal(true);
  };

  return (
    <Content>
      <Modalka
        status={isShowModal}
        modalHandler={() => setIsShowModal(!isShowModal)}
        contact={contact}
      />
      <List>
        {response.map(el => (
          <ContactItem
            contact={el}
            key={el.id}
            modalHandler={() => showModal(el.id)}
          />
        ))}
      </List>
    </Content>
  );
};

export default ContactList;
