// Import hooks từ react-redux và actions từ file cart.js
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart.js";

function ProductItem(props) {
  // Lấy thông tin sản phẩm từ props
  const { item } = props;
  // Khởi tạo dispatch để gửi actions
  const dispatch = useDispatch();
  // Lấy state giỏ hàng từ Redux store
  const cart = useSelector((state) => state.cartReducer);

  // Xử lý sự kiện khi click nút "Thêm vào giỏ hàng"
  const handleAddToCart = () => {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      // Nếu có rồi thì tăng số lượng
      dispatch(updateQuantity(item.id));
    } else {
      // Nếu chưa có thì thêm mới vào giỏ hàng
      dispatch(addToCart(item.id, item));
    }
  };

  return (
    <>
      <div className="product__item" key={item.id}>
        <img className="product__image" src={item.thumbnail} alt={item.title} />
        <h3 className="product__title">{item.title}</h3>
        {/* Tính và hiển thị giá sau khi giảm */}
        <h3 className="product__price-new">
          {(item.price - (item.price / 100) * item.discountPercentage).toFixed(
            0
          )}
          $
        </h3>
        <h3 className="product__price-old">{item.price}$</h3>
        <h3 className="product__percent">{item.discountPercentage}%</h3>
        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
      </div>
    </>
  );
}

export default ProductItem;
