import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import shopReducer from "./shop/shopReducer";
import cartReducer from "./cart/cartReducer";
import testimonialsReducer from "./testimonials/testimonialsReducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  testimonials: testimonialsReducer,
});
