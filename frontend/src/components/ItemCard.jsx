import { Link } from "react-router-dom";

// Inline fallback image (no external service needed)
const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="220">' +
      '<rect width="100%" height="100%" fill="#e5e7eb"/>' +
      '<text x="50%" y="50%" fill="#6b7280" font-family="Arial" font-size="22" ' +
      'text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'
  );

function ItemCard({ item, onDelete }) {
  // Older items saved before this field existed have no discount
  const discount = Number(item.discountPercentage) || 0;
  const discountedPrice = item.price - (item.price * discount) / 100;

  return (
    <div className="card">
      <img
        src={item.imageUrl || PLACEHOLDER_IMAGE}
        alt={item.name}
        className="card-image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = PLACEHOLDER_IMAGE;
        }}
      />
      <h3>{item.name}</h3>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p>
        <strong>Discount Percentage:</strong>{" "}
        <span className="discount-text">{discount}%</span>
      </p>
      {discount > 0 && (
        <p>
          <strong>Price after discount:</strong> ${discountedPrice.toFixed(2)}
        </p>
      )}
      <p>{item.description}</p>

      <div className="card-actions">
        <Link className="btn secondary" to={`/edit-item/${item._id}`}>Edit</Link>
        <button className="btn danger" onClick={() => onDelete(item._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
