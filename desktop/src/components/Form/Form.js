import React, { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ id }) => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    photo: ""
  };
  const [form, setForm] = useState(initialState);

  const inputHandler = e => {
    const name = e.target.id;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="row">
      <div className="col-6 offset-3 p-3 border rounded">
        <form>
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
