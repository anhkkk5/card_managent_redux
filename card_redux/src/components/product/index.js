// Import các dependencies cần thiết
import React, { useState, useEffect } from "react";
import { getProductList } from "../../services/productservices";
import "./Product.scss";
import ProductItem from "./ProductItem";

// Component hiển thị danh sách sản phẩm
function Product() {
  // State lưu trữ danh sách sản phẩm
  const [products, setProducts] = useState([]);

  // useEffect để fetch dữ liệu sản phẩm khi component mount
  useEffect(() => {
    // Hàm async để gọi API lấy danh sách sản phẩm
    const fetchApi = async () => {
      const result = await getProductList("products");
      setProducts(result);
    };
    fetchApi();
  }, []);

  console.log(products);
  return (
    <div>
      <div className="product">
        {/* Map qua danh sách sản phẩm và render từng ProductItem */}
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
