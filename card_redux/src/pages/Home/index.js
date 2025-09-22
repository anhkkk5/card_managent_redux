// Import component Product để hiển thị danh sách sản phẩm
import Product from "../../components/product";

// Component trang chủ
function Home() {
  return (
    <div>
      {/* Tiêu đề cho danh sách sản phẩm */}
      <h2>danh sách sản phẩm</h2>
      {/* Render component Product để hiển thị grid sản phẩm */}
      <Product />
    </div>
  );
}

export default Home;
