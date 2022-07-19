import React from "react";
import { usestate } from "react";

const produc = () => {
  const [data, setdata] = usestate([]);

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((response) => setdata(response.results))
    .catch((err) => console.log(Error));

  console.console.log(data);
};

export default produc;
