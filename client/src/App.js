import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SellerDashboard from "./Pages/SellerDashboard";
import BuyerDashboard from "./Pages/BuyerDashboard";
import ProductList from "./Pages/ProductList";
import AddProduct from "./Pages/AddProduct";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
 <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddProduct />} />

        {/* Catch-all route */}
        <Route path="*" element={<h2 className="text-center mt-5">Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
