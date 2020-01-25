import {
  addContact,
  getContact,
  setError,
  setLoading
} from "./types";

export const requestContact = () => {
  return async dispatch => {
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
};

export const sendContact = contact => {
  return async dispatch => {
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
};
