import { productAPI } from "../axios";

// Sử dụng axios API thay vì fetch
export const getProductList = async () => {
  try {
    const result = await productAPI.getAllProducts();
    return result;
  } catch (error) {
    console.error("Error fetching product list:", error);
    throw error;
  }
};

// Thêm các methods khác sử dụng axios
export const getProductById = async (id) => {
  try {
    const result = await productAPI.getProductById(id);
    return result;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const result = await productAPI.createProduct(productData);
    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const result = await productAPI.updateProduct(id, productData);
    return result;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const result = await productAPI.deleteProduct(id);
    return result;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
