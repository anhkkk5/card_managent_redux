// Initial state cho posts - đơn giản như cart
const initialState = {
  posts: [], // Danh sách posts
  loading: false, // Trạng thái loading
  error: null // Thông báo lỗi
};

// Posts Reducer - đơn giản như cart reducer
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts // Set danh sách posts
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading // Set trạng thái loading
      };

    case "SET_ERROR":
      return {
        ...state,
        error: action.error // Set thông báo lỗi
      };

    default:
      return state;
  }
};

export default postsReducer;