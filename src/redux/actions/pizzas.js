import axios from "axios";

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const setLoaded = (val) => ({
  type: "SET_LOADED",
  payload: val,
});
