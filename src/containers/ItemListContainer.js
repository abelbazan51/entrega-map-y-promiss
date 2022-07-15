import React, { useState } from "react";
import ItemCount from "../components/ItemCount";
import products from "../data/MOCK_DATA.json";

import ItemList from "../components/ItemList";

export const ItemlistContainer = ({ greating }) => {
  const [productList, setProductList] = useState([]);

  /* const onAdd = (param) => {
    console.log(param);
  }; */

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
  myPromise.then((res) => {
    setProductList(res);
  });

  return (
    <>
      <div>{greating}</div>
      {/* <ItemCount initial={100} stock={1500} onAdd={onAdd} /> */}
      <ItemList items={productList} />
    </>
  );
};
