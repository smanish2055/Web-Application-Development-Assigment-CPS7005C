import React from "react";
import { Formik, Form, Field } from "formik";
import API from "../Services/api";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
  try {
    const res = await API.post("/auth/login", values);

    // Save login data
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    localStorage.setItem("username", res.data.username); // store username for dashboard display

    alert("Login successful!");

    // Redirect based on role
    if (res.data.role === "seller") {
      navigate("/seller-dashboard");
    } else if (res.data.role === "buyer") {
      // alert(res.data.role )
      navigate("/buyer-dashboard");
    } else {
      navigate("/dashboard"); // fallback
    }
  } catch (err) {
    alert(err.response?.data?.message || "Login failed");
  }
  setSubmitting(false);
};


  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-5">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h3 className="text-center mb-4 fw-bold text-primary">TechXchange Login</h3>

          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
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

                {/* Submit Button */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-3 fw-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-center mt-3">
                  <span>Don't have an account? </span>
                  <button
                    type="button"
                    className="btn btn-link p-0 text-decoration-none"
                    onClick={() => navigate("/register")}
                  >
                    Register here
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

export default LoginPage;
