import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { requestEditContact, sendContact } from "../../store/actions/actions";
import { Link, useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Form = ({ id }) => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    photo: ""
  };
  const [form, setForm] = useState(initialState);
  const [{ response, fetchLoading }, doFetch] = useFetch();

  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(state => state.loading);
  const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    console.log("useEffect in Form !!!!doFetch");
    if (id) {
      doFetch(`https://ddanshin-af25f.firebaseio.com/contacts/${id}.json`);
    }
  }, [doFetch, id]);

  useEffect(() => {
    console.log("Use effect in Form, proverka na response id ");
    if (response && id) {
      const index = contacts.findIndex(el => el.id === id);
      const { name, phone, email, photo } = contacts[index];
      setForm({ name, phone, email, photo });
    }
  }, [id, response, contacts]);

  const inputHandler = e => {
    const name = e.target.id;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    if (id) {
      await dispatch(requestEditContact({ ...form, id }));
    } else {
      await dispatch(sendContact(form));
    }
    setForm(initialState);
    history.push("/");
  };

  if (loading || fetchLoading) {
    return <Preloader />;
  }

  console.log("Log v forme");

  return (
    <div className="row">
      <div className="col-6 offset-3 p-3 border rounded">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Input name"
              required={true}
              value={form.name}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Input phone"
              required={true}
              value={form.phone}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Input email"
              required={true}
              value={form.email}
              onChange={inputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="text"
              className="form-control"
              id="photo"
              placeholder="Input photo"
              required={true}
              value={form.photo}
              onChange={inputHandler}
            />
          </div>
          <div className="row align-items-center">
            <div className="col-4">
              <img
                className="img-responsive img-thumbnail"
                src={form.photo}
                alt=""
              />
            </div>
            <div className="col-8">
              <button
                className="btn btn-outline-success btn-block"
                type="submit"
              >
                Save
              </button>
              <Link to="/" className="btn btn-outline-info btn-block">
                Back to contact
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
