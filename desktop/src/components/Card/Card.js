import React from "react";
import "./Card.scss";

const Card = ({ photo, name, clickHandler }) => {
  return (
    <div className="col-6 offset-3" onClick={clickHandler}>
      <div className="card mb-3 Card">
        <div className="row no-gutters ">
          <div className="col-md-4">
            <img src={photo} className="card-img img-thumbnail" alt="..." />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
