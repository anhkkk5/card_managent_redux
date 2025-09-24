import api from "./api";

// Product API services
export const productAPI = {
  // Lấy danh sách tất cả sản phẩm
  getAllProducts: () => {
    return api.get("/products");
  },

  // Lấy sản phẩm theo ID
  getProductById: (id) => {
    return api.get(`/products/${id}`);
  },

  // Tạo sản phẩm mới
  createProduct: (productData) => {
    return api.post("/products", productData);
  },

  // Cập nhật sản phẩm
  updateProduct: (id, productData) => {
    return api.patch(`/products/${id}`, productData);
  },

  // Xóa sản phẩm
  deleteProduct: (id) => {
    return api.delete(`/products/${id}`);
  },

  // Tìm kiếm sản phẩm
  searchProducts: (query) => {
    return api.get(`/products/search?q=${encodeURIComponent(query)}`);
  },

  // Lấy sản phẩm theo danh mục
  getProductsByCategory: (categoryId) => {
    return api.get(`/products/category/${categoryId}`);
  },
};

export default productAPI;
