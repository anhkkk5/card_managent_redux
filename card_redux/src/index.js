import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import allReducers from "./reducers/index";
import { Provider } from "react-redux";

// Load cart state from localStorage (if available)
const loadCartState = () => {
  try {
    const serialized = localStorage.getItem("cart");
    if (!serialized) return undefined;
    const cart = JSON.parse(serialized);
    return { cartReducer: Array.isArray(cart) ? cart : [] };
  } catch (e) {
    return undefined;
  }
};

// Create store with preloaded state
const preloadedState = loadCartState();
const store = createStore(allReducers, preloadedState);

// Persist cart state to localStorage on every change
store.subscribe(() => {
  try {
    const state = store.getState();
    const serialized = JSON.stringify(state.cartReducer);
    localStorage.setItem("cart", serialized);
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
