import React from "react";

const AddToCartButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
