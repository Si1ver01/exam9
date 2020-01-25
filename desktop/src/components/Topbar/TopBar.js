import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const TopBar = () => {
  const { location } = useHistory();
  const isDisabledButton = location.pathname === "/";

  return (
    <div className="border-bottom mb-2">
      <div className="container justify-content-between d-flex align-items-center">
        <h1 className="text-info">Contacts</h1>
        {isDisabledButton && (
          <Link to="/new-contact" className="btn btn-outline-info">
            Add contact
            <FontAwesomeIcon icon={faUserPlus} className="ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopBar;
