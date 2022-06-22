const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART":
      getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = currentPizzaItems(allPizzas);

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
