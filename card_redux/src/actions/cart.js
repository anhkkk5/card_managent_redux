// Action creator để thêm sản phẩm mới vào giỏ hàng
export const addToCart = (id, info) => {
  return {
    type: "ADD_TO_CART", // Loại action để thêm sản phẩm mới
    id: id, // ID của sản phẩm cần thêm
    info: info, // Thông tin chi tiết của sản phẩm (giá, tên, hình ảnh,...)
  };
};

// Action creator để tăng/giảm số lượng sản phẩm trong giỏ hàng
export const updateQuantity = (id, quantity = 1) => {
  return {
    type: "UPDATE_QUANTITY", // Loại action để cập nhật số lượng
    id: id, // ID sản phẩm cần cập nhật số lượng
    quantity: quantity, // Số lượng thay đổi (1: tăng, -1: giảm)
  };
};

// Action creator để xóa một sản phẩm khỏi giỏ hàng
export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM", // Loại action để xóa một sản phẩm
    id: id, // ID của sản phẩm cần xóa
  };
};

// Action creator để xóa tất cả sản phẩm trong giỏ hàng
export const deleteAll = () => {
  return {
    type: "DELETE_All", // Loại action để xóa toàn bộ giỏ hàng
  };
};
