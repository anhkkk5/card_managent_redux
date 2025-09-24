// Import các dependencies và actions cần thiết
import { useDispatch } from "react-redux";
import React from "react";
import { updateQuantity, deleteItem } from "../../actions/cart";
import {
  Card,
  Row,
  Col,
  Image,
  Typography,
  InputNumber,
  Button,
  Space,
  Tag,
  Popconfirm,
} from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  DeleteOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function CartItem(props) {
  // Lấy thông tin sản phẩm từ props
  const { item } = props;
  // Khởi tạo dispatch để gửi actions
  const dispatch = useDispatch();

  // Tính giá sau khi giảm
  const discountedPrice = (
    item.info.price -
    (item.info.price / 100) * item.info.discountPercentage
  ).toFixed(0);

  const discountAmount = (item.info.price / 100) * item.info.discountPercentage;

  // Xử lý thay đổi số lượng
  const handleQuantityChange = (value) => {
    if (value && value > 0) {
      const difference = value - item.quantity;
      if (difference > 0) {
        // Tăng số lượng
        for (let i = 0; i < difference; i++) {
          dispatch(updateQuantity(item.id));
        }
      } else if (difference < 0) {
        // Giảm số lượng
        for (let i = 0; i < Math.abs(difference); i++) {
          if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1));
          }
        }
      }
    }
  };

  // Xử lý xóa sản phẩm khỏi giỏ hàng
  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <Card
      className="cart-item"
      style={{
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      hoverable
    >
      <Row gutter={[16, 16]} align="middle">
        {/* Product Image */}
        <Col xs={24} sm={6} md={4}>
          <div style={{ textAlign: "center" }}>
            <Image
              src={item.info.thumbnail}
              alt={item.info.title}
              style={{
                width: "100%",
                maxWidth: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              preview={{
                mask: <ShoppingOutlined style={{ fontSize: "20px" }} />,
              }}
            />
          </div>
        </Col>

        {/* Product Info */}
        <Col xs={24} sm={10} md={12}>
          <Space direction="vertical" size="small" style={{ width: "100%" }}>
            <Title level={5} style={{ margin: 0, lineHeight: 1.4 }}>
              {item.info.title}
            </Title>

            <Space size="small">
              <Text strong style={{ color: "#52c41a", fontSize: "18px" }}>
                ${discountedPrice}
              </Text>
              <Text delete type="secondary" style={{ fontSize: "14px" }}>
                ${item.info.price}
              </Text>
              <Tag color="red" style={{ fontSize: "12px" }}>
                -{item.info.discountPercentage}%
              </Tag>
            </Space>

            <Text type="secondary" style={{ fontSize: "12px" }}>
              Tiết kiệm: ${discountAmount.toFixed(0)}
            </Text>
          </Space>
        </Col>

        {/* Quantity Controls */}
        <Col xs={24} sm={4} md={4}>
          <div style={{ textAlign: "center" }}>
            <Text strong style={{ display: "block", marginBottom: "8px" }}>
              Số lượng
            </Text>
            <InputNumber
              min={1}
              max={99}
              value={item.quantity}
              onChange={handleQuantityChange}
              style={{ width: "80px" }}
              controls={{
                upIcon: <PlusOutlined />,
                downIcon: <MinusOutlined />,
              }}
            />
          </div>
        </Col>

        {/* Total Price & Actions */}
        <Col xs={24} sm={4} md={4}>
          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <div style={{ textAlign: "center" }}>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                Thành tiền
              </Text>
              <div>
                <Text strong style={{ color: "#1890ff", fontSize: "18px" }}>
                  ${(discountedPrice * item.quantity).toFixed(0)}
                </Text>
              </div>
            </div>

            <Popconfirm
              title="Xóa sản phẩm"
              description="Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?"
              onConfirm={handleDelete}
              okText="Xóa"
              cancelText="Hủy"
              okButtonProps={{ danger: true }}
            >
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                size="small"
                style={{
                  borderRadius: "6px",
                }}
              >
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
