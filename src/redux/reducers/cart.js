const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART":
      const getTotalPrice = (arr) =>
        arr.reduce((sum, obj) => obj.price + sum, 0);

      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((odj) => odj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };

    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case "REMOVE_CART_ITEM":
      const newItemsPizza = {
        ...state.items,
      };
      delete newItemsPizza[action.payload];
      return {
        ...state,
        items: newItemsPizza,
      };

    default:
      return state;
  }
};

export default cart;
