import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import CartItem from "../../components/cartItem/CartItem"; // Importing CartItem component
import "./Cart.css"; // Importing CSS for the Cart component

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0); // State to hold the total price of items in the cart
  const { cart } = useSelector((state) => state); // Accessing the cart state from the Redux store

  // useEffect to calculate the total price whenever the cart changes
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0)); // Calculate the total price of items in the cart
  }, [cart]);

  return (
    <div className={cart.length <= 4 ? "cart-container" : "cart-container-1"}>
      {cart && cart.length ? ( // Check if the cart has items
        <>
          <div className="cart-items">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} /> // Render a CartItem for each item in the cart
            ))}
          </div>
          <div className="cart-summary">
            <h1>Your Cart Summary</h1>
            <p>
              <span>Total Items: {cart.length}</span>{" "}
              {/* Display the total number of items in the cart */}
            </p>
            <p>
              <span>Total Amount: ${totalCart.toFixed(2)}</span>{" "}
              {/* Display the total price of items in the cart */}
            </p>
            <button
              onClick={
                () => alert("Thanks for exploring we are working on it.") // Alert message for proceeding
              }
              className="shop-now-button"
            >
              Proceed
            </button>
          </div>
        </>
      ) : (
        <div className="cart-empty">
          <h1>Your Cart is Empty</h1>{" "}
          {/* Display message if the cart is empty */}
          <Link to={"/"}>
            <button className="shop-now-button">Shop Now</button>{" "}
            {/* Link to go back to the shop */}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart; // Export the Cart component as the default export
