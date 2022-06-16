const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART":
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems))
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };

    default:
      return state;
  }
};

export default cart;
