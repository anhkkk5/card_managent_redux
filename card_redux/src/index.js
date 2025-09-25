import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

// Load cart state from localStorage (if available)
const loadCartState = () => {
  try {
    const serialized = localStorage.getItem("cart");
    if (!serialized) return undefined;
    const cart = JSON.parse(serialized);
    return Array.isArray(cart) ? cart : [];
  } catch (e) {
    return [];
  }
};

// Load posts state from localStorage (if available)
const loadPostsState = () => {
  try {
    const serialized = localStorage.getItem("posts");
    if (!serialized) return undefined;
    const posts = JSON.parse(serialized);
    return Array.isArray(posts) ? posts : [];
  } catch (e) {
    return [];
  }
};

// Create store with preloaded state and middleware
const cartState = loadCartState();
const postsState = loadPostsState();

const preloadedState = {
  cartReducer: cartState,
  postsReducer: {
    posts: postsState || [], // Đảm bảo posts luôn là array
    loading: false, // Trạng thái loading đơn giản
    error: null // Thông báo lỗi đơn giản
  }
};

// Configure middleware and DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers, 
  preloadedState,
  composeEnhancers(applyMiddleware(thunk))
);

// Persist cart and posts state to localStorage on every change
store.subscribe(() => {
  try {
    const state = store.getState();
    
    // Persist cart state
    const cartSerialized = JSON.stringify(state.cartReducer);
    localStorage.setItem("cart", cartSerialized);
    
    // Persist posts state (only the posts array, not the entire state)
    if (state.postsReducer && state.postsReducer.posts) {
      const postsSerialized = JSON.stringify(state.postsReducer.posts);
      localStorage.setItem("posts", postsSerialized);
    }
  } catch (e) {
    // ignore write errors
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {" "}
      <App />
    </BrowserRouter>
  </Provider>
);
