import { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import Header      from "../components/header.jsx";
import Footer      from "../components/footer.jsx";
import ProductCard from "../components/ProductCard.jsx";


import { allProducts }               from "../data/Products.js";
import { categories, categoryNames } from "../data/Categories.js";
import "../styles/Category.css";



export default function CategoryPage({
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll,        setShowAll]        = useState(false);

  const filtered = allProducts.filter((p) => 
    activeCategory === "All" || p.category === activeCategory
  );

  const visible = showAll ? filtered : filtered.slice(0, 12);

  const handleCategoryClick = (label) => {
    setActiveCategory(label);
    setShowAll(false);
  };



  return (
    <>
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

      {/* Hero */}
      <div className="cat-hero">
        <div className="cat-hero-overlay" />
        <div className="cat-hero-content">
          <p className="cat-hero-eyebrow">Browse our collection</p>
          <h1 className="cat-hero-title">
            Pick a category,<br />
            <span className="cat-hero-accent">discover the best.</span>
          </h1>
          <p className="cat-hero-sub">
            {allProducts.length} products across {categoryNames.length - 1} categories
          </p>
        </div>
      </div>

      <main className="cat-page">
        {/* Category tabs */}
        <div className="cat-tabs">
          {categoryNames.map((name) => (
            <button
              key={name}
              className={`cat-tab${activeCategory === name ? " cat-tab-active" : ""}`}
              onClick={() => handleCategoryClick(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Section header */}
        <div className="cat-section-header">
          <h2 className="cat-section-title">
            {activeCategory === "All" ? "All Products" : activeCategory}
          </h2>
          <span className="cat-section-count">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Grid */}
        {visible.length > 0 ? (
          <div className="cat-grid">
            {visible.map((product, i) => (
              <ProductCard
                key={i}
                {...product}
                isFavorite={favoriteItemKeys.includes(product.name)}
                onAddToCart={onAddToCart}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="cat-empty">
            <div className="cat-empty-icon">🔍</div>
            <p>No products found for &ldquo;<strong>{search || activeCategory}</strong>&rdquo;</p>
          </div>
        )}

        {/* View All */}
        {!showAll && filtered.length > 12 && (
          <div className="cat-view-all">
            <button className="cat-view-all-btn" onClick={() => setShowAll(true)}>
              VIEW ALL ({filtered.length}) <FiArrowRight size={14} />
            </button>
          </div>
        )}

        {/* CTA Banner */}
        <div className="cat-cta">
          <div className="cat-cta-overlay" />
          <div className="cat-cta-content">
            <h2 className="cat-cta-title">
              Discover products for every part of your day<br />
              <span>choose your category</span>
            </h2>
            <p className="cat-cta-body">
              Our categories help you quickly discover what you&apos;re looking for.
              Find your daily essentials across fresh and convenient options right at your doorstep.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}