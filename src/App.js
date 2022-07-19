import React, { useEffect, useState } from "react";
import "./App.css";

//import Navbar from "./components/navbar";
//import produc from "./containers/productoss";
//import { ItemlistContainer } from "./containers/ItemListContainer";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setTodos(responseJSON);
    console.log(responseJSON);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      hola mundo{" "}
      <ul>
        {!todos
          ? "cargando..."
          : todos.map((todo, index, id) => {
              return (
                <li key={index}>
                  titulo: {todo.title}
                  <tr />
                  id: {todo.id}
                </li>
              );
            })}{" "}
      </ul>
    </div>
  );
}

export default App;
