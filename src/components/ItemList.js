import React from "react";
import Item from "./item";

const ItemList = ({ items = [] }) => {
  return items.map((item) => <Item key={item.id} product={item} />);
};

export default ItemList;
