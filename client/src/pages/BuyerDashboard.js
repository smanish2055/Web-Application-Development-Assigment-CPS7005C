import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuyerDashboard() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      {/* Top Navbar with Hamburger for small screens */}
      <nav className="navbar navbar-dark bg-primary d-md-none">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="navbar-brand mb-0 h1">Buyer Panel</span>
        </div>
      </nav>

      <div className="row">
        {/* Sidebar */}
        <nav
          className={`col-md-3 col-lg-2 bg-primary sidebar d-md-block ${
            sidebarOpen ? "d-block" : "d-none"
          } d-md-block`}
        >
          <div className="position-sticky pt-3 text-white">
            <h4 className="text-center py-3 d-none d-md-block">Buyer Panel</h4>
            <ul className="nav flex-column">
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">Dashboard</button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">Browse Products</button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">My Orders</button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">Wishlist</button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">Messages</button>
              </li>
              <li className="nav-item">
                <button className="nav-link text-white w-100 text-start">Settings</button>
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
          <h2 className="mt-4">Welcome, {username} 👋</h2>
          <p className="text-muted">Here’s your buyer dashboard overview.</p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>My Orders</h5>
                <h2>5</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>Wishlist Items</h5>
                <h2>8</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center p-3">
                <h5>Messages</h5>
                <h2>2</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BuyerDashboard;
