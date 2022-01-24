const INITIAL_STATE = {
  cartItems: [],
  isFetching: false,
  errorMessage: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, cartItems: addItem(state.cartItems, action.payload) };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item._id !== action.payload._id
        ),
      };
    case "EMPTY_CART":
      return {
        ...state,
        cartItems: [],
      };

    case "FECTH_CARTS_START":
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      };
    case "FETCH_CARTS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        cartItems: action.payload,
      };
    case "FECTH_CARTS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;

export const addItem = (cartItems, itemToAdd) => {
  const exists = cartItems.find(item => item._id === itemToAdd._id);

  if (exists) {
    return cartItems.map(item =>
      item._id === itemToAdd._id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(item => item._id !== itemToRemove._id);
  }

  return cartItems.map(item =>
    item._id === itemToRemove._id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
