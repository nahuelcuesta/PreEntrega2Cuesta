import "./ItemListContainer.modules.css";
import { getProducts } from "../AsyncMock/AsyncMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  });

  return (

    <>
    <h1>{title}</h1>
    <ItemList products={products} />
    </>
  );
};

export default ItemListContainer;
