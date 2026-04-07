import { useNavigate } from "react-router-dom";
import Header      from "../components/header.jsx";
import Footer      from "../components/footer.jsx";
import ProductCard from "../components/productCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import "../styles/offers.css";

const featuredOffers = getItemsBySection("featuredOffers");
const promoItems     = [...featuredOffers, ...featuredOffers.slice(0, 2)];

export default function Offers({
  cartItems           = [],
  onAddToCart,
  onUpdateCartQuantity,
  onRemoveFromCart,
  onClearCart,
  favoriteItems       = [],
  favoriteItemKeys    = [],
  onToggleFavorite,
  onRemoveFavorite,
  onClearFavorites,
  currentUser         = null,
  onLogin,
  onSignUp,
  onLogout,
}) {
  const navigate = useNavigate();

  return (
    <div className="offers-page">
      <Header
          cartItems={cartItems}
          onAddToCart={onAddToCart}
          onUpdateCartQuantity={onUpdateCartQuantity}
          onRemoveFromCart={onRemoveFromCart}
          onClearCart={onClearCart}
          favoriteItems={favoriteItems}
          onRemoveFavorite={onRemoveFavorite}
          onClearFavorites={onClearFavorites}
          currentUser={currentUser}
          onLogin={onLogin}
          onSignUp={onSignUp}
          onLogout={onLogout}
      />
      <div className="offers-shell">
        <main className="offers-content">
          <section className="offers-section">
            <div className="offers-section-header">
              <h3 className="offers-title">NEW ARRIVALS</h3>
              <button
                className="offers-view-more"
                type="button"
                onClick={() => navigate("/category")}
              >
                VIEW ALL
              </button>
            </div>

            <div className="offers-arrival-grid">
              <div className="offers-highlight-block" />
              <div className="offers-arrival-right">
                <div className="offers-cards-grid offers-cards-grid-sm">
                  {featuredOffers.map((item, index) => (
                    <ProductCard
                      key={`${item.name}-${index}`}
                      image={item.image}
                      name={item.name}
                      brand={item.brand}
                      price={item.price}
                      oldPrice={item.oldPrice}
                      rating={item.rating}
                      badge={item.badge}
                      inStock={true}
                      onAddToCart={onAddToCart}
                      isFavorite={favoriteItemKeys.includes(item.name)}
                      onToggleFavorite={onToggleFavorite}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="offers-section">
            <div className="offers-section-header">
              <h3 className="offers-title">DEALS OF THE DAY</h3>
            </div>
            <div className="offers-deals-row">
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
              <div className="offers-deal-box" />
            </div>
          </section>

          <section className="offers-section offers-promo-section">
            <div className="offers-section-header">
              <h3 className="offers-title">PROMOTIONS</h3>
            </div>
            <div className="offers-banner-strip" />

            <div className="offers-cards-grid offers-cards-grid-lg">
              {promoItems.map((item, index) => (
                <ProductCard
                  key={`promo-${item.name}-${index}`}
                  image={item.image}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  rating={item.rating}
                  badge={item.badge}
                  inStock={true}
                  onAddToCart={onAddToCart}
                  isFavorite={favoriteItemKeys.includes(item.name)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>

            <div className="offers-banner-strip offers-banner-strip-bottom" />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}