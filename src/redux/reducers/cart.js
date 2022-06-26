const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalSum = (obj, key) => {
  const arrKeys = key.split("-");
  const value = arrKeys.reduce((val, key) => val[key], obj[arrKeys[0]]);
  return Object.keys(obj).reduce((sum, key) => {
    const item = obj[key];
    const value = item.items.length + sum;
    return sum;
  }, 0);
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

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0
      );

      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount,
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
      const currentTotalPrice = newItemsPizza[action.payload].totalPrice;
      const currentTotalCount = newItemsPizza[action.payload].items.length;
      delete newItemsPizza[action.payload];
      return {
        ...state,
        items: newItemsPizza,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };

    default:
      return state;
  }
};

export default cart;
