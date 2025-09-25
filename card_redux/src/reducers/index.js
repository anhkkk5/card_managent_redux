// Import function để kết hợp các reducers
import { combineReducers } from "redux";

// Import reducer quản lý giỏ hàng
import cartReducer from "./cart";

// Import reducer quản lý bài viết
import postsReducer from "./posts";

// Kết hợp tất cả reducers thành một root reducer
const allReducers = combineReducers({
  cartReducer, // Reducer quản lý state giỏ hàng
  postsReducer, // Reducer quản lý state bài viết
});

export default allReducers;
