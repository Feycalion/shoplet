import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ products }) => {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      {filteredProducts.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
