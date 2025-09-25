import { jsonPlaceholderInstance } from "../config";

// Posts API services - sử dụng jsonPlaceholderInstance cho JSONPlaceholder API
export const postsAPI = {
  // Lấy danh sách tất cả posts
  getAllPosts: () => {
    return jsonPlaceholderInstance.get("/posts");
  },

  // Lấy post theo ID
  getPostById: (id) => {
    return jsonPlaceholderInstance.get(`/posts/${id}`);
  },

  // Tạo post mới
  createPost: (postData) => {
    return jsonPlaceholderInstance.post("/posts", postData);
  },

  // Cập nhật post
  updatePost: (id, postData) => {
    return jsonPlaceholderInstance.patch(`/posts/${id}`, postData);
  },

  // Xóa post
  deletePost: (id) => {
    return jsonPlaceholderInstance.delete(`/posts/${id}`);
  },
};

export default postsAPI;