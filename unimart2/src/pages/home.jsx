import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import {
  FiShoppingBag,
  FiShield,
  FiDroplet,
  FiHeart,
  FiActivity,
  FiCoffee,
  FiThermometer,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import heroBanner from "../assets/best seller/best seller hero 1.png";
import "../styles/home.css";

const CATEGORIES = [
  { label: "Fresh\nProducts", icon: <FiDroplet size={26} /> },
  { label: "Personal\nCare", icon: <FiHeart size={26} /> },
  { label: "Health\nCare", icon: <FiActivity size={26} /> },
  { label: "Beauty\nProducts", icon: <FiStar size={26} /> },
  { label: "Drinks", icon: <FiCoffee size={26} /> },
  { label: "Beverages", icon: <FiDroplet size={26} /> },
  { label: "Frozen\nFood", icon: <FiThermometer size={26} /> },
];

const SPECIAL_OFFERS = [
  { title: "Fresh Fruits", discount: "20% Off", cardClass: "home-offer-card-1" },
  { title: "Healthy Vegetables", discount: "10% Off", cardClass: "home-offer-card-2" },
  { title: "Crunchy Snacks", discount: "30% Off", cardClass: "home-offer-card-3" },
];

function Home({
  activeLink = "HOME",
  onNavigate,
  cartItems,
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onClearCart,
  currentUser,
  onLogin,
  onSignUp,
  onLogout,
  favoriteItems,
  favoriteItemKeys,
  onToggleFavorite,
  onRemoveFavorite,
  onClearFavorites,
}) {
  const newProducts = getItemsBySection("newProducts");
  const homeBestSellers = getItemsBySection("homeBestSellers");

  return (
    <div className="home-page">
      {/* ── HEADER ─────────────────────────────────────── */}
      <Header
        initialActive="HOME"
        activeLink={activeLink}
        onNavigate={onNavigate}
        cartItems={cartItems}
        onUpdateCartQuantity={onUpdateCartQuantity}
        onRemoveFromCart={onRemoveFromCart}
        onClearCart={onClearCart}
        currentUser={currentUser}
        onLogin={onLogin}
        onSignUp={onSignUp}
        onLogout={onLogout}
        favoriteItems={favoriteItems}
        onRemoveFavorite={onRemoveFavorite}
        onClearFavorites={onClearFavorites}
      />

      {/* ── HERO BANNER ─────────────────────────────────── */}
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>
            UniMart
            <span>Everything You Need</span>
          </h1>
          <p>
            Fresh groceries, household essentials, and more — delivered fast
            to your doorstep.
          </p>
          <button
            className="home-hero-cta"
            onClick={() => onNavigate && onNavigate("CATEGORY")}
          >
            Shop Now
          </button>
        </div>
        <img
          src={heroBanner}
          alt="UniMart hero"
          className="home-hero-image"
        />
      </section>

      {/* ── FEATURES STRIP ──────────────────────────────── */}
      <div className="home-features-strip">
        <div className="home-feature-item">
          <FiDroplet size={28} color="#d4f5dc" />
          <span className="home-feature-label">Fresh Products</span>
        </div>
        <div className="home-feature-divider" />
        <div className="home-feature-item">
          <FiShield size={28} color="#d4f5dc" />
          <span className="home-feature-label">Secure Payment</span>
        </div>
      </div>

      <div className="home-content">
        {/* ── SHOP BY CATEGORY ──────────────────────────── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Shop By Category</h2>
          </div>
          <div className="home-categories-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.label}
                className="home-category-chip"
                onClick={() => onNavigate && onNavigate("CATEGORY")}
              >
                <span className="home-category-icon-wrap">{cat.icon}</span>
                <span className="home-category-label">
                  {cat.label.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ── NEW PRODUCTS ──────────────────────────────── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">New Products</h2>
            <button
              className="home-view-all"
              onClick={() => onNavigate && onNavigate("CATEGORY")}
            >
              VIEW ALL
            </button>
          </div>
          <div className="home-products-row">
            {newProducts.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                name={item.name}
                brand={item.brand}
                price={item.price}
                oldPrice={item.oldPrice}
                rating={item.rating}
                badge={item.badge}
                inStock={item.inStock !== false}
                onAddToCart={onAddToCart}
                isFavorite={favoriteItemKeys.includes(item.name)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </section>

        {/* ── SPECIAL OFFERS & PROMOTIONS ───────────────── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Special Offers &amp; Promotions</h2>
            <button
              className="home-view-all"
              onClick={() => onNavigate && onNavigate("OFFERS")}
            >
              VIEW ALL
            </button>
          </div>
          <div className="home-offers-grid">
            {SPECIAL_OFFERS.map((offer) => (
              <div key={offer.title} className={`home-offer-card ${offer.cardClass}`}>
                <p className="home-offer-title">{offer.title}</p>
                <p className="home-offer-discount">{offer.discount}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BEST SELLERS ──────────────────────────────── */}
        <section className="home-section">
          <div className="home-section-header">
            <h2 className="home-section-title">Best Sellers</h2>
            <button
              className="home-view-all"
              onClick={() => onNavigate && onNavigate("BESTSELLER")}
            >
              VIEW ALL
            </button>
          </div>
          <div className="home-bestsellers-wrap">
            <div className="home-bestsellers-scroll">
              {homeBestSellers.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                  badge={item.badge}
                  inStock={item.inStock !== false}
                  onAddToCart={onAddToCart}
                  isFavorite={favoriteItemKeys.includes(item.name)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── DELIVERY BANNER ───────────────────────────── */}
        <div className="home-delivery-banner">
          <div className="home-delivery-text">
            <h3>Fresh Groceries, Delivered Fast</h3>
            <p>
              Order before 12 PM for same-day delivery. Free shipping on
              orders above $30.
            </p>
            <button
              className="home-delivery-cta"
              onClick={() => onNavigate && onNavigate("CATEGORY")}
            >
              <FiTruck style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Order Now
            </button>
          </div>
          <div className="home-delivery-image-wrap">
            <img
              src={heroBanner}
              alt="delivery"
              className="home-delivery-person"
            />
          </div>
        </div>
      </div>

      {/* ── FOOTER ────────────────────────────────────── */}
      <Footer />
    </div>
  );
}

export default Home;