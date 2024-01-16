import { getProductsById } from "../AsyncMock/AsyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams();

    useEffect(()=>{
        if(product)document.title = product.name
        return ()=>{
            document.title = 'Thempo'
        }
    },[product])

    useEffect(() => {
        getProductsById(productId).then((product) => {
        setProduct(product);
        });
    }, [productId]);

    return (
        <div>
        <h1>Detalle de producto</h1>
        <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
