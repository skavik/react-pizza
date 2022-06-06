import React from "react";
import { Categories, PizzaBlock, SortPopup } from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItem = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClick={onSelectCategory} item={categoryNames} />
        <SortPopup item={sortItem} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
