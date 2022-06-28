export const setPizzaToCart = (pizzaObj) => ({
  type: "SET_PIZZA_CART",
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id,
});

export const plusCartItem = (id) => ({
  type: "PLUS_CART_ITEM",
  payload: id,
});

export const minustCartItem = (id) => ({
  type: "MINUS_CART_ITEM",
  payload: id,
});
