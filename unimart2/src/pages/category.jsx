import { useMemo, useState } from "react";
import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";
import ProductCard from "../components/ProductCard.jsx";
import FilterModal from "../components/FilterModal.jsx";
import { getItemsBySection } from "../data/storeItems.js";
import "../styles/ProductCard.css";
import "../styles/category.css";

const categoryItems = getItemsBySection("category");

const BRAND_TO_FILTER_CATEGORY = {
  snacks: "Snacks",
  beverages: "Beverages",
  dairy: "Fresh Products",
  bakery: "Fresh Products",
  frozen: "Frozen Foods",
  "personal care": "Personal care",
  pantry: "Health Care",
  "beauty care": "Beauty Care",
  fresh: "Fresh Products",
};

const isPriceMatch = (price, selectedPrice) => {
  if (!selectedPrice) {
    return true;
  }

  if (selectedPrice === "< $5") {
    return price < 5;
  }

  if (selectedPrice === "$5 - $10") {
    return price >= 5 && price <= 10;
  }

  if (selectedPrice === "$11 - $20") {
    return price >= 11 && price <= 20;
  }

  if (selectedPrice === "$21 - $30") {
    return price >= 21 && price <= 30;
  }

  if (selectedPrice === "$30 >") {
    return price > 30;
  }

  return true;
};

const isOfferMatch = (item, selectedOffers = []) => {
  if (!selectedOffers.length) {
    return true;
  }

  const checks = {
    "New Arrivals": item.badge === "New",
    "Deals of the day": item.price < 3,
    Promotions: item.badge === "Sale" || item.badge === "Best",
  };

  return selectedOffers.some((offer) => checks[offer]);
};

const isSalesMatch = (item, selectedSales = []) => {
  if (!selectedSales.length) {
    return true;
  }

  const checks = {
    "Daily best sellers": item.rating >= 5 || item.badge === "Best",
    "Rising trends": item.badge === "New" || item.rating >= 4,
  };

  return selectedSales.some((sale) => checks[sale]);
};

function Category({
  activeLink = "CATEGORY",
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const appliedFilterLabels = useMemo(() => {
    const labels = [];

    if (appliedFilters.price) {
      labels.push(`Price: ${appliedFilters.price}`);
    }

    if (Array.isArray(appliedFilters.categories)) {
      labels.push(...appliedFilters.categories.map((value) => `Category: ${value}`));
    }

    if (Array.isArray(appliedFilters.offers)) {
      labels.push(...appliedFilters.offers.map((value) => `Offer: ${value}`));
    }

    if (Array.isArray(appliedFilters.sales)) {
      labels.push(...appliedFilters.sales.map((value) => `Sales: ${value}`));
    }

    return labels.slice(0, 4);
  }, [appliedFilters]);

  const filteredItems = useMemo(() => {
    const selectedCategories = appliedFilters.categories ?? [];
    const selectedReviews = appliedFilters.reviews ?? [];
    const selectedPrice = appliedFilters.price;
    const selectedOffers = appliedFilters.offers ?? [];
    const selectedSales = appliedFilters.sales ?? [];
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return categoryItems.filter((item) => {
      const normalizedBrand = (item.brand ?? "").toLowerCase();
      const mappedCategory = BRAND_TO_FILTER_CATEGORY[normalizedBrand] ?? "Health Care";

      const categoryPass = !selectedCategories.length || selectedCategories.includes(mappedCategory);
      const reviewPass = !selectedReviews.length || selectedReviews.includes(Math.round(item.rating));
      const pricePass = isPriceMatch(item.price, selectedPrice);
      const offerPass = isOfferMatch(item, selectedOffers);
      const salesPass = isSalesMatch(item, selectedSales);
      const searchPass =
        !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.brand.toLowerCase().includes(normalizedQuery);

      return categoryPass && reviewPass && pricePass && offerPass && salesPass && searchPass;
    });
  }, [appliedFilters, searchQuery]);

  return (
    <div className="category-page">
      <Header
        initialActive="CATEGORY"
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

      <main className="category-main">
        <section className="category-hero" aria-label="Category banner">
          <h1 className="category-hero-title">
            Pick a category, <span>discover the best.</span>
          </h1>
        </section>

        <section className="category-filter-bar" aria-label="Filter controls">
          <button
            type="button"
            className="category-filter-trigger"
            onClick={() => setIsFilterOpen(true)}
          >
            Filter ▼
          </button>

          <label className="category-search-wrap" htmlFor="category-search">
            <input
              id="category-search"
              type="text"
              className="category-search-input"
              placeholder="WHAT ARE YOU LOOKING FOR?"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </label>
        </section>

        <section className="category-applied-row" aria-live="polite">
          <p className="category-applied-title">Applied filters :</p>
          <div className="category-applied-list">
            {appliedFilterLabels.length > 0 ? (
              appliedFilterLabels.map((label) => (
                <span key={label} className="category-applied-chip">
                  {label}
                </span>
              ))
            ) : (
              <span className="category-applied-empty">No filters selected</span>
            )}
          </div>
        </section>

        <section className="category-products-grid">
          {filteredItems.map((item) => (
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
        </section>

        {filteredItems.length === 0 && (
          <p className="category-applied-empty" style={{ marginTop: "10px" }}>
            No products match your current filters.
          </p>
        )}

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onConfirm={(filters) => {
            setAppliedFilters(filters);
            setIsFilterOpen(false);
          }}
          initialFilters={appliedFilters}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Category;