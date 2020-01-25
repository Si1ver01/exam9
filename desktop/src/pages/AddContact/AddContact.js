import React from "react";
import Form from "../../components/Form/Form";
import { useParams } from "react-router-dom";

const AddContact = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <h1 className="text-center text-secondary">Add new contact</h1>
            <Form id={id} />
        </div>
    );
};

export default AddContact;
