import React from "react";
import "./Header.css"; // Importing CSS for the Header component
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import { AiFillHome } from "react-icons/ai"; // Importing Home icon from react-icons
import { IoCartSharp } from "react-icons/io5"; // Importing Cart icon from react-icons
import { useSelector } from "react-redux"; // Importing useSelector hook from react-redux

const Header = () => {
  const { cart } = useSelector((state) => state); // Accessing the cart state from the Redux store

  return (
    <div className="header-wrapper">
      <nav className="nav">
        <Link to={"/"} className="nav-link">
          {" "}
          {/* Link to the home page */}
          <div>
            <h2>E-Shop</h2> {/* Displaying the shop name */}
          </div>
        </Link>
        <ul className="menus">
          <Link to={"/"} className="nav-link">
            {" "}
            {/* Link to the home page */}
            <li className="home-icon">
              <AiFillHome color="#fff" size={30} /> {/* Home icon */}
            </li>
          </Link>
          <Link to={"/cart"} className="nav-link">
            {" "}
            {/* Link to the cart page */}
            <li className="cart-icon">
              <IoCartSharp color="#fff" size={30} /> {/* Cart icon */}
              {cart.length > 0 && ( // If the cart has items, display the count
                <span className="cart-count">{cart.length}</span> // Cart item count
              )}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header; // Export the Header component as the default export
