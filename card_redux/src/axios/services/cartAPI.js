import api from "../api";

// Cart API services
export const cartAPI = {
  // Lấy giỏ hàng của user
  getCart: (userId) => {
    return api.get(`/cart/${userId}`);
  },

  // Thêm sản phẩm vào giỏ hàng
  addToCart: (userId, productId, quantity = 1) => {
    return api.post(`/cart/${userId}/items`, {
      productId,
      quantity,
    });
  },

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  updateCartItem: (userId, itemId, quantity) => {
    return api.patch(`/cart/${userId}/items/${itemId}`, {
      quantity,
    });
  },

  // Xóa sản phẩm khỏi giỏ hàng
  removeFromCart: (userId, itemId) => {
    return api.delete(`/cart/${userId}/items/${itemId}`);
  },

  // Xóa toàn bộ giỏ hàng
  clearCart: (userId) => {
    return api.delete(`/cart/${userId}`);
  },

  // Áp dụng mã giảm giá
  applyCoupon: (userId, couponCode) => {
    return api.post(`/cart/${userId}/coupon`, {
      couponCode,
    });
  },

  // Tính toán tổng tiền giỏ hàng
  calculateTotal: (userId) => {
    return api.get(`/cart/${userId}/total`);
  },
};

export default cartAPI;
