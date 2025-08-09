import React from "react";
import { Formik, Form, Field } from "formik";
import API from "../Services/api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await API.post("/auth/register", values);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
    setSubmitting(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h3 className="text-center mb-4 fw-bold text-primary">TechXchange Register</h3>
          <Formik
            initialValues={{ username: "", password: "", role: "buyer" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control rounded-3"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Role Selection */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Role</label>
                  <select
                    className="form-select rounded-3"
                    value={values.role}
                    onChange={(e) => setFieldValue("role", e.target.value)}
                  >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-3 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register"}
                  </button>
                </div>

                {/* Back to Login */}
                <div className="text-center mt-3">
                  <span>Already have an account? </span>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none"
                    onClick={() => navigate("/login")}
                  >
                    Login here
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
