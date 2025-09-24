# Axios API Configuration

Thư mục này chứa cấu hình axios và các API services cho dự án quan_ly_gio_hang.

## Cấu trúc thư mục

```
src/axios/
├── config.js          # Cấu hình axios instance
├── api.js             # Các methods API cơ bản
├── index.js           # Export tất cả services
└── services/
    ├── productAPI.js  # API services cho sản phẩm
    ├── cartAPI.js     # API services cho giỏ hàng
    └── userAPI.js     # API services cho user
```

## Cách sử dụng

### 1. Import và sử dụng API services

```javascript
import { productAPI, cartAPI, userAPI } from "../axios";

// Sử dụng product API
const products = await productAPI.getAllProducts();
const product = await productAPI.getProductById(1);

// Sử dụng cart API
await cartAPI.addToCart(userId, productId, quantity);
const cart = await cartAPI.getCart(userId);

// Sử dụng user API
await userAPI.login({ email, password });
const user = await userAPI.getCurrentUser();
```

### 2. Sử dụng API methods trực tiếp

```javascript
import { api } from "../axios";

// GET request
const data = await api.get("/products");

// POST request
const result = await api.post("/products", productData);

// PUT request
const updated = await api.put("/products/1", productData);

// DELETE request
await api.delete("/products/1");
```

### 3. Upload file

```javascript
import { api } from "../axios";

const formData = new FormData();
formData.append("file", file);

const result = await api.upload("/upload", formData);
```

## Cấu hình

### Environment Variables

Tạo file `.env` trong thư mục gốc của dự án:

```env
REACT_APP_API_URL=http://localhost:3002
```

### Interceptors

- **Request Interceptor**: Tự động thêm token authentication vào headers
- **Response Interceptor**: Xử lý response và error tự động

### Error Handling

API sẽ tự động xử lý các lỗi phổ biến:

- 401: Unauthorized - redirect đến trang login
- 403: Forbidden - access denied
- 500+: Server error

## Migration từ fetch

Thay thế các hàm fetch cũ:

```javascript
// Cũ (fetch)
import { get, post } from "../utils/request";
const products = await get("products");

// Mới (axios)
import { productAPI } from "../axios";
const products = await productAPI.getAllProducts();
```

## Lợi ích

1. **Tái sử dụng**: Cấu hình tập trung, dễ bảo trì
2. **Error handling**: Xử lý lỗi tự động và nhất quán
3. **Authentication**: Tự động thêm token vào requests
4. **Logging**: Log requests và responses để debug
5. **TypeScript support**: Dễ dàng thêm type definitions
6. **Request/Response transformation**: Tự động parse JSON
7. **Timeout handling**: Cấu hình timeout cho requests
