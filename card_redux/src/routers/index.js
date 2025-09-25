// Import các components cần thiết cho routing
import React from "react";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Posts from "../pages/Posts";

// Cấu hình các routes cho ứng dụng
export const routes = [
  {
    path: "/", // Route gốc
    element: <LayoutDefault />, // Layout chung cho toàn bộ ứng dụng
    children: [
      // Các routes con
      {
        path: "/", // Trang chủ
        element: <Home />, // Component trang chủ
      },
      {
        path: "cart", // Route giỏ hàng
        element: <Cart />, // Component trang giỏ hàng
      },
      {
        path: "posts", // Route quản lý bài viết
        element: <Posts />, // Component trang quản lý bài viết
      },
    ],
  },
];

// Giữ nguyên comment mẫu routes của bạn phía dưới
