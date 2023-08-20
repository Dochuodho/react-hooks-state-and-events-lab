import React, { useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectCategory, setSelectCategory]=useState("All")

  function handleFilter(event) {
    setSelectCategory(event.target.value);
  }
  const data = items.filter((item) => {
    if (selectCategory === "All") {
      return true;
    } else {
      return item.category === selectCategory;
    }
  });
  const newdata = data.map((item) => {
    return <Item key={item.id} name={item.name} category={item.category} id={item.id}/>;
  });
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {newdata}
      </ul>
    </div>
  );
}

export default ShoppingList;
