const API_DOMAIN = "http://localhost:3002/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};

export const post = async (path, data) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // chuyển dữ liệu thành JSON
  });
  const result = await response.json();
  return result;
};

export const del = async (path) => {
  // Gửi yêu cầu DELETE đến API với ID của sản phẩm cần xóa
  const response = await fetch(API_DOMAIN + path, {
    method: "DELETE", // Phương thức DELETE để xóa dữ liệu
  });

  // Chuyển đổi phản hồi từ API sang dạng JSON
  const result = await response.json();
  return result;
};

export const edit = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options), // chuyển dữ liệu thành JSON
  });
  const result = await response.json(); // chuyển dữ liệu thành JSON
  return result;
};
