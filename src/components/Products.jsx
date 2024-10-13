import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import SearchBar from "./SearchBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = "https://v2.api.noroff.dev/online-shop";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProducts(data.data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-600 mb-6 text-center">
          Products
        </h2>
        <SearchBar products={products} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
