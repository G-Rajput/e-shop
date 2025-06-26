import { useDispatch } from "react-redux"; // Importing useDispatch hook from react-redux
import { removeFromCart } from "../../redux/slices/cartSlice"; // Importing removeFromCart action from the cart slice
import "./CartItem.css"; // Importing CSS for the CartItem component

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux

  // Function to handle removing the item from the cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id)); // Dispatch the removeFromCart action with the item's id
  }

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <img
          className="cart-item-image"
          src={cartItem?.image}
          alt={cartItem?.title} // Display the product image
        />
        <div className="cart-item-details">
          <h1 className="cart-item-title">{cartItem?.title}</h1>{" "}
          {/* Display the product title */}
          <p className="cart-item-price">
            Price: ${cartItem?.price.toFixed(2)}{" "}
            {/* Display the product price */}
          </p>
        </div>
      </div>
      <div className="cart-item-actions">
        <button className="remove-from-cart" onClick={handleRemoveFromCart}>
          Remove From Cart {/* Button to remove the item from the cart */}
        </button>
      </div>
    </div>
  );
};

export default CartItem; // Export the CartItem component as the default export
