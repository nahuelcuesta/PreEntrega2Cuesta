const Item = ({product})=>{

    console.log(product)
return (
    <div>
    <img src={product.img} alt={product.name} />
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    </div>
)

}
export default Item;