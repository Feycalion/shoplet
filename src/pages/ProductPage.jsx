import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import { useCart } from "../components/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const apiUrl = `https://v2.api.noroff.dev/online-shop/${id}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        setProduct(data.data);
      } catch (error) {
        console.log("Error fetching product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    console.log(`Added ${product.title} to cart`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const priceDisplay =
    product.discountedPrice && product.discountedPrice < product.price ? (
      <div>
        <span className="text-red-500 font-bold text-xl">
          ${product.discountedPrice}
        </span>
        <span className="line-through text-gray-500 ml-2">
          ${product.price}
        </span>
      </div>
    ) : (
      <span className="text-xl text-indigo-500 font-bold">
        ${product.price}
      </span>
    );

  return (
    <>
      <div className="flex items-start justify-center min-h-screen bg-gray-100 py-56">
        <div className="flex flex-col sm:flex-row items-start justify-start max-w-4xl w-full">
          {product.image && (
            <img
              src={product.image.url}
              alt={product.image.alt || "Product Image"}
              className="w-64 h-64 object-cover rounded-lg sm:mr-6 mb-6 sm:mb-0"
            />
          )}

          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-semibold mb-4">{product.title}</h3>
            <div className="text-md mb-4 text-gray-700">
              {product.description}
            </div>
            <div className="text-yellow-500 text-lg mb-4">
              Rating: {product.rating} ★
            </div>

            <div className="text-lg mb-6">{priceDisplay}</div>

            <div className="mt-auto">
              <AddToCartButton onClick={handleAddToCart} />
            </div>
            {product.reviews && product.reviews.length > 0 ? (
              <div className="mt-10  p-6 ">
                <h4 className="font-semibold text-lg mb-4">Reviews:</h4>
                <ul className="space-y-2">
                  {product.reviews.map((review) => (
                    <li key={review.id} className="border-b pb-2">
                      <strong>{review.username}</strong>: {review.description} -{" "}
                      {review.rating} ★
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto mt-10 p-6">
                No reviews for this product.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
