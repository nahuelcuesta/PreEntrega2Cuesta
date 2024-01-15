import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar img = {'./iconos/thempoIcono.png'}/>
      <ItemListContainer title={"Thempo.ar"} />
    </>
  );
}

export default App;
