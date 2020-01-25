import React from "react";
import Loader from "react-loader-spinner";
import "./Preloader.scss";

const Preloader = () => {
  return (
    <div className="Preloader">
      <h1>Loading</h1>
      <Loader type="Bars" color="#2BBBAD" height={100} width={100} />
    </div>
  );
};

export default Preloader;
