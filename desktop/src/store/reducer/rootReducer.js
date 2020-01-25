import {
  ADD_CONTACT,
  GET_CONTACT,
  LOADING,
} from "../actions/types";

const initialState = {
  contacts: [],
  loading: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACT:
      return { ...state, contacts: action.payload, loading: false };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false
      };
    case LOADING:
      return { ...state, loading: true, error: null };
    case Error:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
