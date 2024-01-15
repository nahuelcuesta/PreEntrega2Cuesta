import './item.modules.css'

const Item = ({ id, name, price, category, img, stock }) => {
  console.log();
  return (
    <div className="itemContainer">
      <img src={img} alt={name} />
      <h1>{name}</h1>
      <p>$ {price}</p>
    </div>
  );
};
export default Item;
