import Header from "../components/header.jsx";
import Footer from "../components/Footer.jsx";

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
  return (
    <div>
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

      <main style={{ minHeight: "60vh" }} />

      <Footer />
    </div>
  );
}

export default Home;