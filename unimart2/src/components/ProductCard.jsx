import { useState } from "react";
import { FiShoppingCart, FiHeart, FiCheck } from "react-icons/fi";
import { FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "../styles/ProductCard.css";

function StarRating({ rating = 4 }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= Math.floor(rating)) return <FaStar key={i} size={11} color="#f47c20" />;
        if (i - rating < 1 && rating % 1 >= 0.5) return <FaStarHalfAlt key={i} size={11} color="#f47c20" />;
        return <FaRegStar key={i} size={11} color="#ddd" />;
      })}
      <span className="star-rating-count">({rating.toFixed(1)})</span>
    </div>
  );
}

const badgeClass = {
  New:  "badge-new",
  Best: "badge-best",
  Sale: "badge-sale",
};

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
  const [added, setAdded] = useState(false);

  const discount = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

  const handleAdd = () => {
    setAdded(true);
    onAddToCart?.({ name, price });
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-card">

      <div className="product-img-wrap">
        <img src={image} alt={name} className="product-img" />

        {badge && badgeClass[badge] && (
          <span className={`product-badge ${badgeClass[badge]}`}>{badge}</span>
        )}

        {discount && (
          <span className="product-discount">-{discount}%</span>
        )}

        <button
          className={`product-wish-btn ${wished ? "wished" : ""}`}
          onClick={() => setWished(!wished)}
          title="Wishlist"
        >
          {wished ? <FaHeart size={14} color="#e53935" /> : <FiHeart size={14} color="#aaa" />}
        </button>
      </div>

      <div className="product-body">
        <div className="product-brand">{brand}</div>
        <div className="product-name">{name}</div>

        <StarRating rating={rating} />

        <div className="product-price-row">
          <span className="product-price">${price.toFixed(2)}</span>
          {oldPrice && <span className="product-old-price">${oldPrice.toFixed(2)}</span>}
        </div>

        <button
          className={`product-cart-btn ${!inStock ? "out-of-stock" : ""} ${added ? "added" : ""}`}
          onClick={handleAdd}
          disabled={!inStock}
        >
          {added ? <FiCheck size={14} /> : <FiShoppingCart size={14} />}
          {!inStock ? "Out of Stock" : added ? "Product Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}