import api from "../api";

// Cart API services
export const cartAPI = {
  // Lấy giỏ hàng (sử dụng session)
  getCart: () => {
    return api.get("/cart");
  },

  // Thêm sản phẩm vào giỏ hàng
  addToCart: (productId, quantity = 1) => {
    return api.post("/cart/items", {
      productId,
      quantity,
    });
  },

  // Cập nhật số lượng sản phẩm trong giỏ hàng
  updateCartItem: (itemId, quantity) => {
    return api.patch(`/cart/items/${itemId}`, {
      quantity,
    });
  },

  // Xóa sản phẩm khỏi giỏ hàng
  removeFromCart: (itemId) => {
    return api.delete(`/cart/items/${itemId}`);
  },

  // Xóa toàn bộ giỏ hàng
  clearCart: () => {
    return api.delete("/cart");
  },

  // Áp dụng mã giảm giá
  applyCoupon: (couponCode) => {
    return api.post("/cart/coupon", {
      couponCode,
    });
  },

  // Tính toán tổng tiền giỏ hàng
  calculateTotal: () => {
    return api.get("/cart/total");
  },
};

export default cartAPI;
