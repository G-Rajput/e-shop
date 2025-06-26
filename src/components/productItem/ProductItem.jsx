import React from "react";
import "./ProductItem.css"; // Importing CSS for the ProductItem component
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from react-redux
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice"; // Importing actions from the cart slice
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux
  const { cart } = useSelector((state) => state); // Access the cart state from the Redux store
  // Check if the product is already in the cart
  const isIdSame = cart.some((item) => item.id === product.id);

  // Function to handle adding the product to the cart
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  // Function to handle removing the product from the cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product?.id));
  }

  return (
    <div className="product-item">
      <Link to={`/product/${product?.id}`}>
        <div className="product-image">
          <img src={product?.image} alt={product?.title} />{" "}
          {/* Display product image */}
        </div>
        <h3 className="product-title">{product?.title}</h3>{" "}
        {/* Display product title */}
      </Link>
      <div className="product-details">
        <p className="product-price">Price: ${product?.price}</p>{" "}
        {/* Display product price */}
        <button
          onClick={isIdSame ? handleRemoveFromCart : handleAddToCart} // Toggle add/remove based on if the product is in the cart
          className={isIdSame ? "remove-from-cart" : "add-to-cart"} // Apply appropriate class based on cart state
        >
          {isIdSame ? "Remove From Cart" : "Add To Cart"}{" "}
          {/* Display appropriate button text */}
        </button>
      </div>
    </div>
  );
};

export default ProductItem; // Export the ProductItem component as the default export
