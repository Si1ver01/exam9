import {
  addContact,
  editContact,
  getContact,
  removeContact,
  setError,
  setLoading
} from "./types";

export const requestContact = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await fetch(
      "https://ddanshin-af25f.firebaseio.com/contacts.json"
    );
    const data = await response.json();
    const formatData = Object.keys(data).map(elem => ({
      ...data[elem],
      id: elem
    }));
    dispatch(getContact(formatData));
  } catch (e) {
    console.log("catch", e);
    dispatch(setError(e));
  }
};

export const sendContact = contact => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await fetch(
      "https://ddanshin-af25f.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contact)
      }
    );
    const { name } = await response.json();
    dispatch(addContact({ ...contact, id: name }));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const requestEditContact = contact => async dispatch => {
  try {
    dispatch(setLoading());
    await fetch(
      `https://ddanshin-af25f.firebaseio.com/contacts/${contact.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify(contact)
      }
    );
    dispatch(editContact(contact));
  } catch (e) {
    dispatch(setError(e));
  }
};

export const requestRemoveContact = id => async dispatch => {
  try {
    dispatch(setLoading());
    await fetch(`https://ddanshin-af25f.firebaseio.com/contacts/${id}.json`, {
      method: "DELETE"
    });
    dispatch(removeContact(id));
  } catch (e) {
    setError(e);
  }
};
