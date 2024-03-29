import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar img={"./iconos/thempoIcono.png"} />
        <Routes>
          <Route path="/" element={<ItemListContainer title={"Listado de productos"} />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer title={"Categoria: "} />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer />}/>  
          <Route path="*" element={<h1>ERROR 404</h1>}/>        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
