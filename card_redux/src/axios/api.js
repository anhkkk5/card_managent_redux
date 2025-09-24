import axiosInstance from "./config";

// API methods sử dụng axios instance đã được cấu hình
export const api = {
  // GET request
  get: (url, config = {}) => {
    return axiosInstance.get(url, config);
  },

  // POST request
  post: (url, data = {}, config = {}) => {
    return axiosInstance.post(url, data, config);
  },

  // PUT request
  put: (url, data = {}, config = {}) => {
    return axiosInstance.put(url, data, config);
  },

  // PATCH request
  patch: (url, data = {}, config = {}) => {
    return axiosInstance.patch(url, data, config);
  },

  // DELETE request
  delete: (url, config = {}) => {
    return axiosInstance.delete(url, config);
  },

  // Upload file
  upload: (url, formData, config = {}) => {
    return axiosInstance.post(url, formData, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config.headers,
      },
    });
  },
};

export default api;
