import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Badge from "./badge";
import Button from "./button.jsx";
import StarRating from "./starRating.jsx";
import "../styles/ProductCard.css";

export default function ProductCard({
  image = " ",
  name = "Product Name",
  brand = "Brand",
  price = 5.99,
  oldPrice = null,
  rating = 3,
  badge = null,
  inStock = true,
  onAddToCart,
}) {
  const [wished, setWished] = useState(false);

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

  const handleAdd = () => {
    onAddToCart?.({ name, price });
  };

  return (
    <div className="product-card">

      <div className="product-img-wrap">
        <img src={image} alt={name} className="product-img" />

        <Badge label={badge} />

        {discount && (
          <span className="product-discount">-{discount}%</span>
        )}

      </div>

      <div className="product-body">
        <div className="product-brand">{brand}</div>
        <div className="product-name">{name}</div>

        <StarRating rating={rating} />

        <div className="product-price-row">
          <span className="product-price">${price.toFixed(2)}</span>
          {oldPrice && <span className="product-old-price">${oldPrice.toFixed(2)}</span>}
        </div>

        <div className="product-action-row">
          <Button
            label={inStock ? "Buy Now" : "Out of Stock"}
            disabled={!inStock}
            onClick={handleAdd}
          />

          <span
            className={`product-favorite-trigger ${wished ? "active" : ""}`}
            onClick={() => setWished(!wished)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setWished((current) => !current);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={wished ? "Remove from favorites" : "Add to favorites"}
            title="Favourite"
          >
            {wished ? <FaStar size={15} /> : <FiStar size={15} />}
          </span>
        </div>
      </div>
    </div>
  );
}