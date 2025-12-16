function ProductCard({ name, price, description, category }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 8 }}>
      <h2>{name}</h2>
      <p>Giá: {price} VND</p>
      <p>{description && <small>{description}</small>}</p>
      <p>{category}</p>
    </div>
  );
}
export default ProductCard;
