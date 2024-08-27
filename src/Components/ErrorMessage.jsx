import React from "react";

const ErrorMessage = ({ proFoodItem }) => {
  return (
    <>
      {proFoodItem.length === 0 && (
        <h1 className="display-4">I am still hungry</h1>
      )}
    </>
  );
};

export default ErrorMessage;
