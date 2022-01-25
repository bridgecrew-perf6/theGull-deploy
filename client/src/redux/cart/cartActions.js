export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const clearItem = (item) => ({
  type: "CLEAR_ITEM",
  payload: item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  payload: item,
});

export const emptyCart = () => ({
  type: "EMPTY_CART",
});

export const updateCartInMongodb = () => ({
  type: "UPDATE_CART_IN_MONGODB",
});

export const fetchCartsStart = () => ({
  type: "FETCH_CARTS_START",
});
