// Ví dụ sử dụng axios API trong components
import React, { useState, useEffect } from "react";
import { productAPI, cartAPI, userAPI } from "../axios";

const ExampleComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ví dụ: Lấy danh sách sản phẩm
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await productAPI.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError("Không thể tải danh sách sản phẩm");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Ví dụ: Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async (productId) => {
    try {
      const userId = "user123"; // Thay bằng ID user thực tế
      await cartAPI.addToCart(userId, productId, 1);
      // TODO: Replace with proper notification system
      console.log("Đã thêm vào giỏ hàng!");
    } catch (err) {
      // TODO: Replace with proper error notification
      console.error("Không thể thêm vào giỏ hàng");
      console.error(err);
    }
  };

  // Ví dụ: Đăng nhập (hàm mẫu để demo API)
  // eslint-disable-next-line no-unused-vars
  const handleLogin = async (credentials) => {
    try {
      const response = await userAPI.login(credentials);
      localStorage.setItem("token", response.token);
      // TODO: Replace with proper notification system
      console.log("Đăng nhập thành công!");
    } catch (err) {
      // TODO: Replace with proper error notification
      console.error("Đăng nhập thất bại:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error}</div>;

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product.id)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExampleComponent;
