import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import "./ProductDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams(); // Extract the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch(); // Initialize the dispatch function from react-redux
  const { cart } = useSelector((state) => state); // Access the cart state from the Redux store
  // Check if the product is already in the cart
  const isIdSame = product && cart.some((item) => item.id === product.id);

  // Function to handle adding the product to the cart
  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  // Function to handle removing the product from the cart
  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }
  useEffect(() => {
    // Fetch the product details using the product ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  console.log([product]);

  if (!product) {
    return <Loader />; // Display a loading message while fetching the product details
  }

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>
        <b>Category:</b> {product.category}
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
      <p className="price">Price: ${product.price}</p>
      <button
        onClick={isIdSame ? handleRemoveFromCart : handleAddToCart} // Toggle add/remove based on if the product is in the cart
        className={isIdSame ? "remove-from-cart" : "add-to-cart"} // Apply appropriate class based on cart state
      >
        {isIdSame ? "Remove From Cart" : "Add To Cart"}{" "}
        {/* Display appropriate button text */}
      </button>
    </div>
  );
};

export default ProductDetail;
