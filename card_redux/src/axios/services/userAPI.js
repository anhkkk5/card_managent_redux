import api from "../api";

// User API services
export const userAPI = {
  // Đăng ký user mới
  register: (userData) => {
    return api.post("/auth/register", userData);
  },

  // Đăng nhập
  login: (credentials) => {
    return api.post("/auth/login", credentials);
  },

  // Đăng xuất
  logout: () => {
    return api.post("/auth/logout");
  },

  // Lấy thông tin user hiện tại
  getCurrentUser: () => {
    return api.get("/auth/me");
  },

  // Cập nhật thông tin user
  updateProfile: (userData) => {
    return api.patch("/auth/profile", userData);
  },

  // Đổi mật khẩu
  changePassword: (passwordData) => {
    return api.patch("/auth/change-password", passwordData);
  },

  // Quên mật khẩu
  forgotPassword: (email) => {
    return api.post("/auth/forgot-password", { email });
  },

  // Reset mật khẩu
  resetPassword: (token, newPassword) => {
    return api.post("/auth/reset-password", {
      token,
      password: newPassword,
    });
  },
};

export default userAPI;
