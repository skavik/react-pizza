export const setPizzaToCart = (pizzaObj) => ({
  type: "SET_PIZZA_CART",
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
