import "../styles/bestSeller.css";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import bestSellerHeroImage from "../assets/best seller/best seller hero 1.png";
import bestSellerHeroSideImage from "../assets/best seller/best seller hero 2.png";
import popularCategory1 from "../assets/best seller/popular category 1.png";
import popularCategory2 from "../assets/best seller/popular category 2.png";
import popularCategory3 from "../assets/best seller/popular category 3.png";
import popularCategory4 from "../assets/best seller/popular category 4.png";

const dailyBestSellers = getItemsBySection("dailyBestSellers");
const risingTrends = getItemsBySection("risingTrends");
const categoryPromoCards = [
  {
    title: "Fresh Meat",
    image: popularCategory1,
    tone: "lime",
  },
  {
    title: "Fresh Vegetables",
    image: popularCategory2,
    tone: "green",
  },
  {
    title: "Snacks & Drinks",
    image: popularCategory3,
    tone: "green",
  },
  {
    title: "Fresh Produce",
    image: popularCategory4,
    tone: "lime",
  },
];

function BestSeller({
  activeLink = "BEST SELLERS",
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
    <div className="bs-page">
      <div className="bs-shell">
        <Header
          initialActive="BEST SELLERS"
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

        <main className="bs-content">
          <section className="bs-hero">
            <article className="bs-promo bs-promo-main">
              <h2>
                <span>Hot Picks.</span>
                <span>Fast Moving.</span>
                <span>
                  Don&apos;t <strong>Miss Out.</strong>
                </span>
              </h2>
              <img
                src={bestSellerHeroImage}
                alt="Best seller products"
                className="bs-main-illustration"
              />
            </article>

            <article className="bs-promo bs-promo-side">
              <img
                src={bestSellerHeroSideImage}
                alt="Best seller featured product"
                className="bs-side-image"
              />
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
                onClick={() => onNavigate?.("CATEGORY")}
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
                onClick={() => onNavigate?.("CATEGORY")}
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
                  <article key={card.title} className={`bs-cat-promo bs-cat-promo-${card.tone}`}>
                    <h5>{card.title}</h5>
                    <button type="button" className="bs-cat-buy-btn">Buy Now</button>
                    {card.image && <img src={card.image} alt={card.title} className="bs-cat-promo-image" />}
                  </article>
                ))}
              </div>

              <aside className="bs-promo-banner" aria-label="Promotional banner">
                <p className="bs-promo-banner-tag">Limited time</p>
                <h5>Fresh deals every day</h5>
                <p className="bs-promo-banner-copy">
                  Save more on produce, snacks, and pantry picks this week.
                </p>
                <button type="button" className="bs-promo-banner-btn">
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

export default BestSeller;