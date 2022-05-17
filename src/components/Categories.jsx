import React from "react";

function Categories({ item }) {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {item.map((name, index) => (
          <li key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
