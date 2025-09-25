import axios from "axios";

// Cấu hình base URL cho API
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const JSONPLACEHOLDER_BASE_URL = "https://jsonplaceholder.typicode.com";

// Tạo instance axios với cấu hình mặc định cho API local
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 giây timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Tạo instance axios riêng cho JSONPlaceholder API
const jsonPlaceholderInstance = axios.create({
  baseURL: JSONPLACEHOLDER_BASE_URL,
  timeout: 10000, // 10 giây timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor cho axiosInstance - xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Local API Request sent:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("Local API Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor cho axiosInstance - xử lý response và error
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Local API Response received:", response.status, response.config.url);
    return response.data; // Trả về data thay vì toàn bộ response object
  },
  (error) => {
    console.error("Local API Response error:", error.response?.status, error.message);

    // Xử lý các lỗi phổ biến
    if (error.response?.status === 403) {
      // Forbidden
      console.error("Access denied");
    } else if (error.response?.status >= 500) {
      // Server error
      console.error("Server error occurred");
    }

    return Promise.reject(error);
  }
);

// Request interceptor cho jsonPlaceholderInstance
jsonPlaceholderInstance.interceptors.request.use(
  (config) => {
    console.log("JSONPlaceholder API Request sent:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("JSONPlaceholder API Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor cho jsonPlaceholderInstance
jsonPlaceholderInstance.interceptors.response.use(
  (response) => {
    console.log("JSONPlaceholder API Response received:", response.status, response.config.url);
    return response.data; // Trả về data thay vì toàn bộ response object
  },
  (error) => {
    console.error("JSONPlaceholder API Response error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Export cả hai instances
export default axiosInstance;
export { jsonPlaceholderInstance };
