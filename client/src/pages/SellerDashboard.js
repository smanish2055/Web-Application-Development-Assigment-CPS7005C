import React, { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

function SellerDashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      {/* Top Navbar with Hamburger */}
      <nav className="navbar navbar-dark bg-dark d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">Seller Panel</span>
        </div>
      </nav>

      <div className="row">
        {/* Sidebar */}
        <nav
          className={`col-md-3 col-lg-2 bg-dark sidebar d-md-block ${
            sidebarOpen ? "d-block" : "d-none"
          } d-md-block`}
        >
          <div className="position-sticky pt-3 text-white">
            <h4 className="text-center py-3 d-none d-md-block">Seller Panel</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="" className="nav-link text-white w-100 text-start">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-white w-100 text-start">
                  My Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products/add" className="nav-link text-white w-100 text-start">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start" disabled>
                  Orders
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start" disabled>
                  Reviews
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start" disabled>
                  Messages
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start" disabled>
                  Settings
                </button>
              </li>
              <li className="nav-item mt-3">
                <button onClick={handleLogout} className="btn btn-danger w-100">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default SellerDashboard;
