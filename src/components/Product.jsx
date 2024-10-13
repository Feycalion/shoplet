import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, showLink = true, showReviews = false }) => {
  const priceDisplay =
    product.discountedPrice && product.discountedPrice < product.price ? (
      <div>
        <span className="text-red-500 font-bold">
          ${product.discountedPrice}
        </span>
        <span className="line-through text-gray-500 ml-2">
          ${product.price}
        </span>
      </div>
    ) : (
      <span className="text-indigo-500 font-bold">${product.price}</span>
    );

  const cardContent = (
    <div className="bg-white shadow-md rounded-lg p-4 w-auto min-w-96 h-84 flex flex-col justify-between">
      {product.image && (
        <img
          src={product.image.url}
          alt={product.image.alt || "Product Image"}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
      <p className="text-md mb-2">{priceDisplay}</p>
      <p className="text-yellow-500">Rating: {product.rating} ★</p>

      {showReviews && product.reviews && product.reviews.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Reviews:</h4>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id} className="mb-2">
                <strong>{review.username}</strong>: {review.description} -{" "}
                {review.rating} ★
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return showLink ? (
    <Link to={`/products/${product.id}`} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default Product;
