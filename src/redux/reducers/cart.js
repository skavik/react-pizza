const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART": {
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

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

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

    case "PLUS_CART_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1
          ? state.items[action.payload].items.slice(1)
          : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

export default cart;
