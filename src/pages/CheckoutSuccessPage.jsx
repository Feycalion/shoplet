import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your purchase was successful!
        </h1>
        <Link to="/" className="text-teal-500 hover:underline">
          Keep browsing
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
