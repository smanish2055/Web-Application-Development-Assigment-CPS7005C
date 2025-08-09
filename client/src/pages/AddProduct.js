import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!product.name || !product.price) {
      alert("Name and Price are required");
      return;
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...product,
          price: parseFloat(product.price),
          stock: parseInt(product.stock) || 0,
        }),
      });

      if (res.ok) {
        alert("Product added successfully!");
        navigate("/seller/products");
      } else {
        const data = await res.json();
        alert(data.message || "Failed to add product");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label className="form-label">Name*</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={product.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Price*</label>
          <input
            type="number"
            step="0.01"
            name="price"
            className="form-control"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            name="stock"
            className="form-control"
            value={product.stock}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
