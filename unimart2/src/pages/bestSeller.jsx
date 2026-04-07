import "../styles/bestSeller.css";
import { useNavigate } from "react-router-dom";
import Header      from "../components/header.jsx";
import Footer      from "../components/footer.jsx";
import ProductCard from "../components/productCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";

const dailyBestSellers = getItemsBySection("dailyBestSellers");
const risingTrends     = getItemsBySection("risingTrends");

const categoryPromoCards = [
  { title: "Fresh Meat",        tone: "lime"  },
  { title: "Fresh Vegetables",  tone: "green" },
  { title: "Snacks & Drinks",   tone: "green" },
  { title: "Fresh Produce",     tone: "lime"  },
];

export default function BestSeller({
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
    <div className="bs-page">
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
      <div className="bs-shell">

        <main className="bs-content">
          <section className="bs-hero">
            <article className="bs-promo bs-promo-main">
              <h2>
                <span>Hot Picks.</span>
                <span>Fast Moving.</span>
                <span>Don&apos;t <strong>Miss Out.</strong></span>
              </h2>
              <div className="bs-main-illustration" />
            </article>

            <article className="bs-promo bs-promo-side">
              <div className="bs-side-image" />
              <div className="bs-side-caption">
                <p>Shop what everyone&apos;s loving at UniMart.</p>
                <button type="button" className="bs-side-shop-btn">
                  Shop now
                </button>
              </div>
            </article>
          </section>

          <section className="bs-section">
            <div className="bs-section-header">
              <h4>DAILY BEST SELLERS</h4>
              <button
                type="button"
                className="bs-view-all"
                onClick={() => navigate("/category")}
              >
                VIEW ALL
              </button>
            </div>
            <div className="bs-products-row">
              {dailyBestSellers.map((item) => (
                <ProductCard
                  key={item.name}
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
          </section>

          <section className="bs-section">
            <div className="bs-section-header">
              <h4>RISING TRENDS</h4>
              <button
                type="button"
                className="bs-view-all"
                onClick={() => navigate("/category")}
              >
                VIEW ALL
              </button>
            </div>
            <div className="bs-products-row">
              {risingTrends.map((item) => (
                <ProductCard
                  key={item.name}
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
          </section>

          <section className="bs-section bs-categories">
            <h4>POPULAR CATEGORIES</h4>
            <div className="bs-category-layout">
              <div className="bs-category-promo-grid">
                {categoryPromoCards.map((card) => (
                  <article
                    key={card.title}
                    className={`bs-cat-promo bs-cat-promo-${card.tone}`}
                  >
                    <h5>{card.title}</h5>
                    <button
                      type="button"
                      className="bs-cat-buy-btn"
                      onClick={() => navigate("/category")}
                    >
                      Buy Now
                    </button>
                    <div className="bs-cat-promo-image" />
                  </article>
                ))}
              </div>

              <aside className="bs-promo-banner" aria-label="Promotional banner">
                <p className="bs-promo-banner-tag">Limited time</p>
                <h5>Fresh deals every day</h5>
                <p className="bs-promo-banner-copy">
                  Save more on produce, snacks, and pantry picks this week.
                </p>
                <button
                  type="button"
                  className="bs-promo-banner-btn"
                  onClick={() => navigate("/offers")}
                >
                  Explore Offers
                </button>
              </aside>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}