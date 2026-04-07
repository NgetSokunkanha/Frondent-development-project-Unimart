import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Badge from "./badge.jsx";
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
  isFavorite = false,
  onToggleFavorite,
}) {
  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

  const handleAdd = () => {
    onAddToCart?.({ image, name, brand, price, oldPrice });
  };

  const handleFavoriteToggle = () => {
    onToggleFavorite?.({ image, name, brand, price, oldPrice });
  };

  return (
    <div className="product-card">

      <div className="product-body">
        <Badge label={badge} />

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
            className={`product-favorite-trigger ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteToggle}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleFavoriteToggle();
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            title="Favourite"
          >
            {isFavorite ? <FaStar size={17} /> : <FiStar size={17} />}
          </span>
        </div>
      </div>

      <div className="product-img-wrap">
        <div className="product-img" />
      </div>

    </div>
  );
}