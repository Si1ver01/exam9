import React from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPencilAlt,
  faPhone,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ contact, closeModal, deleteHandler }) => {
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="row ">
        <div className="col-6 offset-3 border rounded bg-light shadow">
          <div className="row py-2">
            <div className="col-12 mb-2">
              <button
                className="btn-outline-danger btn btn-block"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div className="col-6">
              <img
                className="img-thumbnail card-img"
                src={contact.photo}
                alt=""
              />
            </div>
            <div className="col-6 flex-column d-flex ">
              <h2 className="border-bottom pb-1">{contact.name}</h2>
              <span className="">
                <FontAwesomeIcon icon={faPhone} className="mr-1" /> Phone :
                {contact.phone}
              </span>
              <span className="mt-1">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Mail : {contact.email}
              </span>
              <div className="row mt-auto">
                <div className="col-6">
                  <Link
                    to={`/edit-contact/${contact.id}`}
                    className="btn btn-outline-info btn-block"
                  >
                    <FontAwesomeIcon icon={faPencilAlt} className="mr-2" /> Edit
                  </Link>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-outline-danger btn-block"
                    onClick={() => deleteHandler(contact.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
