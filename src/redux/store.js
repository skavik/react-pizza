import { createStore } from "redux";
import roodReducer from "./reducers";

const store = createStore(
  roodReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
