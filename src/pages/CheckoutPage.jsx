import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const CheckoutPage = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } =
    useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

      <div className="max-w-xl mx-auto space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <div
              key={product.id}
              className="flex justify-between bg-white p-4 shadow-md rounded-lg"
            >
              <div className="flex items-center">
                <img
                  src={product.image.url}
                  alt={product.image.alt}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-600">
                    ${product.price} x {product.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-3 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>

      <div className="max-w-xl mx-auto mt-6">
        <h3 className="text-xl font-bold text-center">
          Total: ${totalPrice.toFixed(2)}
        </h3>
      </div>

      {cartItems.length > 0 && (
        <div className="max-w-xl mx-auto mt-6">
          <button
            onClick={handleCheckout}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
