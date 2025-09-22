// Import các dependencies cần thiết
import React from "react";
import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../actions/cart";
import {
  Row,
  Col,
  Typography,
  Button,
  Card,
  Space,
  Divider,
  Empty,
  Statistic,
  Badge,
} from "antd";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  DollarOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

// Component trang giỏ hàng
function Cart() {
  // Lấy state giỏ hàng từ Redux store
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  // Log ra state giỏ hàng để kiểm tra
  console.log(cart);

  const total = cart.reduce((sum, item) => {
    const priceNew = (
      item.info.price -
      (item.info.price / 100) * item.info.discountPercentage
    ).toFixed(0);
    return sum + priceNew * item.quantity;
  }, 0);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
      <Row gutter={[24, 24]}>
        {/* Header Section */}
        <Col span={24}>
          <Card
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "12px",
            }}
            bodyStyle={{ padding: "24px" }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Space align="center" size="large">
                  <Badge count={totalItems} size="large" offset={[-10, 10]}>
                    <ShoppingCartOutlined
                      style={{ fontSize: "32px", color: "#fff" }}
                    />
                  </Badge>
                  <div>
                    <Title level={2} style={{ color: "#fff", margin: 0 }}>
                      Giỏ hàng của bạn
                    </Title>
                    <Text
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "16px",
                      }}
                    >
                      {totalItems} sản phẩm trong giỏ hàng
                    </Text>
                  </div>
                </Space>
              </Col>
              <Col>
                {cart.length > 0 && (
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    size="large"
                    onClick={handleDeleteAll}
                    style={{
                      borderRadius: "8px",
                      height: "40px",
                      fontWeight: "500",
                    }}
                  >
                    Xóa tất cả
                  </Button>
                )}
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Cart Content */}
        <Col span={24}>
          {cart.length > 0 ? (
            <Row gutter={[24, 24]}>
              {/* Cart Items */}
              <Col xs={24} lg={16}>
                <Card
                  title={
                    <Space>
                      <ShoppingOutlined />
                      <span>Sản phẩm trong giỏ hàng</span>
                    </Space>
                  }
                  style={{ borderRadius: "12px" }}
                >
                  <CartList />
                </Card>
              </Col>

              {/* Order Summary */}
              <Col xs={24} lg={8}>
                <Card
                  title={
                    <Space>
                      <DollarOutlined />
                      <span>Tổng kết đơn hàng</span>
                    </Space>
                  }
                  style={{ borderRadius: "12px" }}
                >
                  <Space
                    direction="vertical"
                    style={{ width: "100%" }}
                    size="large"
                  >
                    <Statistic
                      title="Tổng sản phẩm"
                      value={totalItems}
                      suffix="sản phẩm"
                      valueStyle={{ color: "#1890ff" }}
                    />

                    <Divider />

                    <Statistic
                      title="Tổng tiền"
                      value={total}
                      prefix="$"
                      valueStyle={{
                        color: "#52c41a",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    />

                    <Button
                      type="primary"
                      size="large"
                      block
                      style={{
                        height: "48px",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "500",
                        background:
                          "linear-gradient(135deg, #52c41a 0%, #73d13d 100%)",
                        border: "none",
                        boxShadow: "0 4px 12px rgba(82, 196, 26, 0.3)",
                      }}
                    >
                      Thanh toán ngay
                    </Button>

                    <Button
                      size="large"
                      block
                      style={{
                        height: "40px",
                        borderRadius: "8px",
                      }}
                    >
                      Tiếp tục mua sắm
                    </Button>
                  </Space>
                </Card>
              </Col>
            </Row>
          ) : (
            <Card style={{ borderRadius: "12px", textAlign: "center" }}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <div>
                    <Title level={4} style={{ color: "#999" }}>
                      Giỏ hàng trống
                    </Title>
                    <Text type="secondary">
                      Hãy thêm một số sản phẩm vào giỏ hàng để bắt đầu mua sắm!
                    </Text>
                  </div>
                }
              >
                <Button
                  type="primary"
                  size="large"
                  style={{
                    borderRadius: "8px",
                    height: "40px",
                  }}
                >
                  Mua sắm ngay
                </Button>
              </Empty>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
