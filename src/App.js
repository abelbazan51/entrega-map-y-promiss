import "./App.css";
import Item from "./components/item";
import Navbar from "./components/navbar";
import { ItemlistContainer } from "./containers/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemlistContainer greating={"Productos"} />
    </>
  );
};

export default App;
