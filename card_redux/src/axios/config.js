import axios from "axios";

// Cấu hình base URL cho API
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

// Tạo instance axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 giây timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor - thêm token hoặc xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
  (config) => {
    // Có thể thêm token authentication ở đây
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("Request sent:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - xử lý response và error
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response.status, response.config.url);
    return response.data; // Trả về data thay vì toàn bộ response object
  },
  (error) => {
    console.error("Response error:", error.response?.status, error.message);

    // Xử lý các lỗi phổ biến
    if (error.response?.status === 401) {
      // Unauthorized - có thể redirect đến trang login
      localStorage.removeItem("token");
      window.location.href = "/login";
    } else if (error.response?.status === 403) {
      // Forbidden
      console.error("Access denied");
    } else if (error.response?.status >= 500) {
      // Server error
      console.error("Server error occurred");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
