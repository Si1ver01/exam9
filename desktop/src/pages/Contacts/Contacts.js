import { useSelector } from "react-redux";
import Preloader from "../../components/Preloader/Preloader";
import React from 'react'


const Contacts = () => {
  const contacts = useSelector(state => state.contacts);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  return (
    <div className="container">
      <div className="row"></div>
    </div>
  );
};

export default Contacts;
