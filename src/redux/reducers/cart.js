const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_CART":
      return {
        ...state,
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload,
          ],
        },
      };

    default:
      return state;
  }
};

export default cart;
