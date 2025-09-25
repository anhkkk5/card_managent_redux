import postsAPI from '../axios/services/postsAPI';

// Action creator để set danh sách posts
export const setPosts = (posts) => {
  return {
    type: "SET_POSTS", // Loại action để set danh sách posts
    posts: posts, // Danh sách posts từ API
  };
};

// Action creator để set loading state
export const setLoading = (loading) => {
  return {
    type: "SET_LOADING", // Loại action để set loading
    loading: loading, // true/false
  };
};

// Action creator để set error
export const setError = (error) => {
  return {
    type: "SET_ERROR", // Loại action để set error
    error: error, // Thông báo lỗi
  };
};

// Action creator để fetch posts từ API
export const fetchAllPosts = () => {
  return async (dispatch) => {
    try {
      // Bắt đầu loading
      dispatch(setLoading(true));
      dispatch(setError(null));

      console.log('🚀 Posts Action: Fetching all posts from API...');
      
      // Gọi API
      const posts = await postsAPI.getAllPosts();
      
      console.log('✅ Posts Action: Successfully fetched posts:', posts.length);
      
      // Dispatch action để set posts
      dispatch(setPosts(posts));
      
    } catch (error) {
      console.error('❌ Posts Action: Error fetching posts:', error);
      
      // Set error
      dispatch(setError('Không thể tải danh sách bài viết'));
    } finally {
      // Tắt loading
      dispatch(setLoading(false));
    }
  };
};