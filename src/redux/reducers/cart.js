const intialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = intialState, action) => {
  switch (action.type) {
    case "SET_TOTEL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "SET_TOTEL_PRICE":
      return {
        ...state,
        totalCount: action.payload,
      };

    default:
      return state;
  }
};

export default cart;
