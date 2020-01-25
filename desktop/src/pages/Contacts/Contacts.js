import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  requestContact
} from "../../store/actions/actions";
import Preloader from "../../components/Preloader/Preloader";
import Modal from "../../components/Modal/Modal";

const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const [showModal, setShowModal] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!contacts.length) {
      dispatch(requestContact());
    }
  }, [dispatch, contacts]);

  if (error) {
    return (
      <div>
        <p className="text-danger"> Error </p>
      </div>
    );
  }

  if (loading || !contacts.length) {
    return <Preloader />;
  }

  const modalShow = id => {
    const index = contacts.findIndex(el => el.id === id);
    setContactInfo(contacts[index]);
    setShowModal(true);
  };



  return (
    <div className="container">
      {showModal && (
        <Modal
          contact={contactInfo}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className="row">
        {contacts.map(elem => (
          <Card
            photo={elem.photo}
            name={elem.name}
            key={elem.id}
            clickHandler={() => modalShow(elem.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
