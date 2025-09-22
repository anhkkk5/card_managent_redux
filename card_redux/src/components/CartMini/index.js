import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Button, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

function CartMini() {
  // Lấy state giỏ hàng từ Redux store
  const cart = useSelector((state) => state.cartReducer);

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  // reduce() sẽ duyệt qua từng item trong cart và cộng dồn quantity
  const total = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  console.log(total);

  return (
    <Space>
      <Badge count={total} size="small" offset={[-5, 5]}>
        <Link to="/cart">
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            size="large"
            style={{
              backgroundColor: "#52c41a",
              borderColor: "#52c41a",
              borderRadius: "8px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "500",
              boxShadow: "0 2px 8px rgba(82, 196, 26, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#73d13d";
              e.target.style.borderColor = "#73d13d";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 12px rgba(82, 196, 26, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#52c41a";
              e.target.style.borderColor = "#52c41a";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(82, 196, 26, 0.3)";
            }}
          >
            Giỏ hàng
          </Button>
        </Link>
      </Badge>
    </Space>
  );
}
export default CartMini;
