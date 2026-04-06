import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import "../styles/offers.css";

const featuredOffers = getItemsBySection("featuredOffers");

const promoItems = [
  ...featuredOffers,
  ...featuredOffers.slice(0, 2),
];

function Offers({
  activeLink = "OFFERS & UPDATES",
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
  return (
    <div className="offers-page">
      <div className="offers-shell">
        <Header
          initialActive="OFFERS & UPDATES"
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

        <main className="offers-content">
          <section className="offers-section">
            <div className="offers-section-header">
              <h3 className="offers-title">NEW ARRIVALS</h3>
              <button
                className="offers-view-more"
                type="button"
                onClick={() => onNavigate?.("CATEGORY")}
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

export default Offers;