import "./ItemListContainer.modules.css";
import { getProducts, getProductsByCategory } from "../AsyncMock/AsyncMock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ title }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(()=>{
    if(categoryId) document.title = 'Thempo '+ categoryId
    return ()=>{
        document.title = 'Thempo'
    }
},[categoryId])

  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts 

    asyncFunction(categoryId).then((response) => {
      setProducts(response);
    })
    .catch((error)=>{
      console.error(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [categoryId]);

  if (loading){
    return(
      <h1>CARGANDO</h1>
    )
  }

  return (

    <>
    
    <h1>{title + (categoryId ?? " ")}</h1>
    <ItemList products={products} />

    </>
  );
};

export default ItemListContainer;
