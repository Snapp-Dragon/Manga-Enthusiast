import React from "react";
import spinner from "./persona2.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "550px", margin: "auto", display: "block" }}
      />
    </>
  );
};

export default Spinner;
