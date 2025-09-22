// Import các dependencies cần thiết
import React from "react";
import { routes } from "../../routers";
import { useRoutes } from "react-router-dom";

// Component quản lý tất cả các routes của ứng dụng
function AllRouter() {
  // useRoutes hook sẽ tạo ra các elements dựa trên cấu hình routes
  const elements = useRoutes(routes);

  // Render các route elements được tạo ra
  return <>{elements}</>;
}

export default AllRouter;
