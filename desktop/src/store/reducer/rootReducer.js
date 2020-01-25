import {
  ADD_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT,
  LOADING,
  REMOVE_CONTACT
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
    case EDIT_CONTACT:
      return {
        ...state,
        loading: false,
        contacts: [...state.contacts].map(elem =>
          elem.id === action.payload.id ? action.payload : elem
        )
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts].filter(el => el.id !== action.payload),
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
