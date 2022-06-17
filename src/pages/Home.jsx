import React from "react";
import {
  Categories,
  PizzaBlock,
  PizzaLoadingBlock,
  SortPopup,
} from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";
import { setPizzaToCart } from "../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItem = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "asc" },
  { name: "алфавиту", type: "name", order: "desc" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const handelAddPizzaToCart = (obj) => {
    dispatch(setPizzaToCart(obj));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          item={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          item={sortItem}
          onclickSortType={onSelectSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handelAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
