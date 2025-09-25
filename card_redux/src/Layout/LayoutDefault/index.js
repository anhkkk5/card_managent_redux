// Import các styles và dependencies
import "./layoutDefault.scss";
import React from "react";
import CartMini from "../../components/CartMini";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu, Typography, Space, Divider } from "antd";
import {
  HomeOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

// Component layout mặc định cho toàn bộ ứng dụng
function LayoutDefault() {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="/">Trang chủ</Link>,
    },
    {
      key: "products",
      icon: <ShopOutlined />,
      label: <Link to="/">Sản phẩm</Link>,
    },
    {
      key: "cart",
      icon: <ShoppingCartOutlined />,
      label: <Link to="/cart">Giỏ hàng</Link>,
    },
    {
      key: "posts",
      icon: <FileTextOutlined />,
      label: <Link to="/posts">Bài viết</Link>,
    },
    {
      key: "about",
      icon: <UserOutlined />,
      label: <Link to="/about">Giới thiệu</Link>,
    },
  ];

  return (
    <Layout className="layout-default">
      {/* Header với Ant Design */}
      <Header className="layout-default__header">
        <Row justify="space-between" align="middle" style={{ height: "100%" }}>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Title level={3} style={{ color: "#fff", margin: 0 }}>
                🛍️ ShopOnline
              </Title>
            </Link>
          </Col>

          <Col xs={0} sm={8} md={12} lg={14}>
            <Menu
              theme="dark"
              mode="horizontal"
              items={menuItems}
              style={{
                backgroundColor: "transparent",
                border: "none",
                justifyContent: "center",
              }}
            />
          </Col>

          <Col xs={12} sm={8} md={6} lg={6} style={{ textAlign: "right" }}>
            <CartMini />
          </Col>
        </Row>
      </Header>

      {/* Main content với Ant Design */}
      <Content className="layout-default__main">
        <div style={{ minHeight: "calc(100vh - 134px)" }}>
          <Outlet />
        </div>
      </Content>

      {/* Footer với Ant Design */}
      <Footer className="layout-default__footer">
        <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={12} lg={8}>
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Title level={4} style={{ color: "#fff", margin: 0 }}>
                🛍️ ShopOnline
              </Title>
              <Text style={{ color: "#fff" }}>
                Nền tảng mua sắm trực tuyến hàng đầu
              </Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Text strong style={{ color: "#fff" }}>
                Liên hệ
              </Text>
              <Text style={{ color: "#fff" }}>📧 support@shoponline.com</Text>
              <Text style={{ color: "#fff" }}>📞 1900-xxxx</Text>
            </Space>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <Space
              direction="vertical"
              align="center"
              style={{ width: "100%" }}
            >
              <Text strong style={{ color: "#fff" }}>
                Theo dõi chúng tôi
              </Text>
              <Space>
                <Text style={{ color: "#fff" }}>📘 Facebook</Text>
                <Text style={{ color: "#fff" }}>📷 Instagram</Text>
                <Text style={{ color: "#fff" }}>🐦 Twitter</Text>
              </Space>
            </Space>
          </Col>
        </Row>
        <Divider style={{ borderColor: "#fff", margin: "20px 0 10px 0" }} />
        <Row justify="center">
          <Col>
            <Text style={{ color: "#fff" }}>
              © 2024 ShopOnline. Tất cả quyền được bảo lưu. | @Tanklanhchanh
            </Text>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default LayoutDefault;
