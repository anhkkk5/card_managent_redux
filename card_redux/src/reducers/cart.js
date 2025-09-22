// Reducer quản lý state giỏ hàng
const cartReducer = (state = [], action) => {
  // Tạo bản sao của state để đảm bảo tính bất biến (immutability)
  let newState = [...state];

  switch (action.type) {
    case "ADD_TO_CART":
      // Thêm sản phẩm mới vào giỏ hàng với số lượng mặc định là 1
      return [
        ...state,
        {
          id: action.id, // ID sản phẩm
          info: action.info, // Thông tin sản phẩm (giá, tên, hình ảnh,...)
          quantity: 1, // Số lượng ban đầu
        },
      ];

    case "UPDATE_QUANTITY":
      // Tìm sản phẩm trong giỏ hàng theo ID
      const itemUpdate = newState.find((item) => item.id === action.id);
      // Cập nhật số lượng (tăng/giảm tùy vào action.quantity)
      itemUpdate.quantity = itemUpdate.quantity + action.quantity;
      return newState;

    case "DELETE_ITEM":
      // Xóa một sản phẩm khỏi giỏ hàng bằng cách lọc ra các sản phẩm có ID khác
      newState = newState.filter((item) => item.id !== action.id);
      return newState;

    case "DELETE_All":
      // Xóa tất cả sản phẩm bằng cách gán mảng rỗng
      newState = [];
      return newState;

    default:
      // Trả về state hiện tại nếu không có action phù hợp
      return state;
  }
};

export default cartReducer;
