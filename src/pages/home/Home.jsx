import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import ProductItem from "../../components/productItem/ProductItem";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data) {
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          "All",
          ...new Set(data.map((p) => p.category)),
        ];
        setCategories(uniqueCategories);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  useEffect(() => {
    let result = [...products];
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "popularity":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy, products]);

  return (
    <div className="home-container">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Sidebar Toggle Button */}
          <button
            className="drawer-toggle"
            onClick={() => setIsDrawerOpen(true)}
          >
            ☰ Filters
          </button>

          {/* Sidebar Drawer */}
          <div className={`filter-drawer ${isDrawerOpen ? "open" : ""}`}>
            <button
              className="close-btn"
              onClick={() => setIsDrawerOpen(false)}
            >
              ×
            </button>
            <h3>Filter By</h3>
            <div>
              <label>Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="price-filter">
              <label>Price Range:</label>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              />
              <span>Up to ${priceRange[1]}</span>
            </div>
          </div>

          {/* Overlay when drawer is open */}
          {isDrawerOpen && (
            <div
              className="backdrop"
              onClick={() => setIsDrawerOpen(false)}
            ></div>
          )}

          {/* Main Content */}
          <div className="products-section">
            <div className="sort-options">
              <label>Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">None</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="products-wrapper">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
