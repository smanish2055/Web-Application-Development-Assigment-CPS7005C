import React from "react";
import { Button, Typography, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 80 }}>
      <Card style={{ width: 500 }}>
        <Title level={3}>Welcome, {username || "User"}!</Title>
        <Paragraph>Your role: {role}</Paragraph>
        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </div>
  );
}

export default Dashboard;