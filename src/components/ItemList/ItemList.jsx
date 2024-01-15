import Item from "../Item/Item";


const ItemList = ({ products }) => {
    return (
        <div>
        {
            products.map((product) => {
                return (
                <div key={product.id}>
                    <Item product={product}/>
                </div>
                );
            })
        }
        </div>
    );
};

export default ItemList;
