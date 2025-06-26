// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Cart from "./pages/cart/Cart";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import "./App.css"; // Importing CSS for the App component
import { Route, Routes } from "react-router-dom"; // Importing Route and Routes components from react-router-dom
import Home from "./pages/home/Home"; // Importing the Home component
import Cart from "./pages/cart/Cart"; // Importing the Cart component
import Header from "./components/header/Header"; // Importing the Header component
import Footer from "./components/footer/Footer"; // Importing the Footer component
import Details from "./pages/details/ProductDetail";
import ProductDetail from "./pages/details/ProductDetail";
import Table from "./components/Table";

function App() {
  return (
    <div className="app">
      <Header /> {/* Render the Header component */}
      <Routes>
        {/* Define the routes for the application */}
        <Route exact path="/" element={<Home />} />{" "}
        {/* Route for the Home component */}
        <Route path="/cart" element={<Cart />} />{" "}
        {/* Route for the Cart component */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
}

export default App; // Export the App component as the default export
