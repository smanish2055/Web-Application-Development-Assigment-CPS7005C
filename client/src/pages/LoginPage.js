import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Input, Typography, Card } from "antd";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await API.post("/auth/login", values);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
    setSubmitting(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80 }}>
      <Card style={{ width: 400 }}>
        <Title level={3}>Login</Title>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div style={{ marginBottom: 15 }}>
                <Field name="username">
                  {({ field }) => <Input {...field} placeholder="Username" />}
                </Field>
              </div>
              <div style={{ marginBottom: 15 }}>
                <Field name="password">
                  {({ field }) => (
                    <Input.Password {...field} placeholder="Password" />
                  )}
                </Field>
              </div>
              <Button type="primary" htmlType="submit" block loading={isSubmitting}>
                Login
              </Button>
              <Button
                type="link"
                block
                onClick={() => navigate("/register")}
                style={{ marginTop: 10 }}
              >
                Create an account
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default LoginPage;
