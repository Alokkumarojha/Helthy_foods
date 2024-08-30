import React from "react";

const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && <h1 className="display-4">I am still hungry</h1>}
    </>
  );
};

export default ErrorMessage;
