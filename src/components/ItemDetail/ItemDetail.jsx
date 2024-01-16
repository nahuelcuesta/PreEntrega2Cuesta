import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, price, description, stock }) => {

    const handleOnAdd = (quantity)=>{
    const objProduct ={
        id,
        name,
        quantity,
        price
    }
    console.log ('se agrego correctamente', objProduct)
}

    return (
        <div className="itemContainer">
        <img src={import.meta.env.BASE_URL + img} alt={name} />
        <h1>{name}</h1>
        <p>$ {price}</p>
        <p>{description}</p>
        <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </div>
    );
};

export default ItemDetail;
