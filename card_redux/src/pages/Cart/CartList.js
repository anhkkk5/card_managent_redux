import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Row, Col, Space, Typography } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";
import "./cart.scss";

const { Text } = Typography;

function CartList() {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <div className="cart-list">
      {cart.length > 0 ? (
        <Row gutter={[16, 16]}>
          {cart.map((item) => (
            <Col xs={24} key={item.id}>
              <CartItem item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          <Space direction="vertical" size="large">
            <ShoppingOutlined style={{ fontSize: "48px", color: "#d9d9d9" }} />
            <Text type="secondary" style={{ fontSize: "16px" }}>
              Chưa có sản phẩm nào trong giỏ hàng
            </Text>
          </Space>
        </div>
      )}
    </div>
  );
}
export default CartList;
