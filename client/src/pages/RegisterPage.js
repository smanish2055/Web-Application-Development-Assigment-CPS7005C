import React from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import { Button, Input, Select, Typography, Card } from "antd";
import "antd/dist/reset.css"; // for AntD v5+
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const { Title } = Typography;

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await API.post("/auth/register", values);
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
        console.error("Register error:", err.response?.data?.message)
       alert(err.response?.data?.message);

    }
    setSubmitting(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80 }}>
      <Card style={{ width: 400 }}>
        <Title level={3}>Register</Title>
        <Formik
          initialValues={{ username: "", password: "", role: "buyer" }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <FormikForm>
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
              <div style={{ marginBottom: 15 }}>
                <Select
                  value={values.role}
                  onChange={(value) => setFieldValue("role", value)}
                  style={{ width: "100%" }}
                >
                  <Option value="buyer">Buyer</Option>
                  <Option value="seller">Seller</Option>
                  <Option value="admin">Admin</Option>
                </Select>
              </div>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isSubmitting}
              >
                Register
              </Button>
              <Button
                type="link"
                block
                onClick={() => navigate("/login")}
                style={{ marginTop: 10 }}
              >
                Back to Login
              </Button>
            </FormikForm>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default RegisterPage;
