import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";

const roodReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});

export default roodReducer;
